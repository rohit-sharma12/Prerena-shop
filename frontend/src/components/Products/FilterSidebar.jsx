import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const [priceRange, setPriceRange] = useState([0, 100]);

    const categories = ["Top Wear", "Bottom Wear"];

    const colors = [
        "Red",
        "Yellow",
        "Green",
        "Black",
        "White",
        "Pink",
        "Blue",
        "Orange",
        "Gray",
        "Navy",
        "Beige",
    ];
    const sizes = ["XS", "S", "M", "L", "XL", "XML"];

    const materials = [
        "Cotton",
        "Silk",
        "Linen",
        "Net",
        "Chiffon",
        "Velvet",
        "Organza",
        "Rayon",
        "Crepe",
        "Georgette",
    ];

    const brands = [
        "Biba",
        "Libas",
        "Jaypore",
        "Bunaai",
        "Kalanjali",
        "Sundari Silks",
        "House of Indya",
    ];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            category: params.category || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        })
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);


    const handleFilterChnage = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item != value);
            }
        } else {
            newFilters[name] = value;
        }
        setFilters(newFilters)
       
        
    };

    return (
        <div className="p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Category</label>
                {categories.map((category) => (
                    <div key={category} className="flex items-center mb-1">
                        <input type="radio" name="category" value={category} onChange={handleFilterChnage} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-300 border-gray-300" />

                        <span className="text-gray-700">{category}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button key={color} name="color" value={color} onClick={handleFilterChnage} className="w-8 h-8 rounded-full border vorder-gray-300 cursor-pointer transition hover:scale-105"
                            style={{ backgroundColor: color.toLowerCase() }}
                        >
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <label className="black text-gray-600 font-medium mb-2">Size</label>
                {sizes.map((size) => (
                    <div key={size} className="flex items-center mb-1">
                        <input type="checkbox" name="size" value={size} onChange={handleFilterChnage} className="mr-2 h-4 w-4 text-blue-500 foxus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{size}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <label className="black text-gray-600 font-medium mb-2">Material</label>
                {materials.map((material) => (
                    <div key={material} className="flex items-center mb-1">
                        <input type="checkbox" name="material" value={material} onChange={handleFilterChnage} className="mr-2 h-4 w-4 text-blue-500 foxus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{material}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <label className="black text-gray-600 font-medium mb-2">Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input type="checkbox" name="brand" value={brand} onChange={handleFilterChnage} className="mr-2 h-4 w-4 text-blue-500 foxus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{brand}</span>
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <label className="bloack text-gray-600 font-medium mb-2">Price Rnage</label>
                <input type="range" name="priceRnage" min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
