const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes = [],
            colors = [],
            collections,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
            user: req.user.id,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
});

//Updating product
router.put("/:id", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimension,
            weight,
            sku,
        } = req.body;

        //Find product by id
        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimension = dimension || product.dimension;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;

            const updatedProduct = await product.save();
            res.json(updatedProduct)
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

//Delete prodcut
router.delete("/:id", protect, admin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.deleteOne();
            res.json({ message: "Product removed" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
})

//
router.get("/", async (req, res) => {
    try {
        const { collection, size, color, minPrice, maxPrice, sortBy, search, category, material, brand, limit } = req.query;

        let query = {};
        //filter logic
        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collection = collection;
        }
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }
        if (material) {
            query.material = { $in: material.split(".") };
        }
        if (brand) {
            query.brand = { $in: brand.split(".") };
        }
        if (size) {
            query.size = { $in: size.split(".") };
        }
        if (color) {
            query.color = { $in: [color] };
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice)
            if (maxPrice) query.price.$lte = Number(maxPrice)
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]
        }
        let sort = {};
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sort = { price: 1 };
                    break;
                case "priceDesc":
                    sort = { price: -1 };
                    break;
                case "popularity":
                    sort = { rating: -1 };
                    break;
                default:
                    break;
            }
        }

        let products = await Product.find(query).sort(sort).limit(Number(limit) || 0);
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error");
    }
})

router.get("/best-seller", async (req, res) => {
    try {
        const bestSeller = await Product.findOne().sort({ rating: -1 });
        if (bestSeller) {
            res.json(bestSeller);
        } else {
            res.status(404).json({ message: "No best seler found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

//New Arrivals
router.get("/new-arrivals", async (req, res) => {
    try {
        const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(10);
        res.json(newArrivals);
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error");
    }
})


//product by id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ message: "Product no found" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");

    }
})

//similar products
router.get("/similar/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const similarProducts = await Product.find({
            id: { $ne: id },
            category: product.category,
        }).limit(4);

        res.json(similarProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }

})





module.exports = router;
