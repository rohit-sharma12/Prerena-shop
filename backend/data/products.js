const products = [
    {
        name: "Masaba",
        description:
            "Masaba presents a cranberry red saree in dupion and jacquard organza base with kolar mocha motif embroidery. It is paired with a dupion blouse. Style this luxurious saree with statement earrings and bangles for a wedding or festive occasion to complement the regal vibe.",
        price: 999,
        discountPrice: 899,
        countInStock: 25,
        sku: "WS-004",
        category: "Suits",
        brand: "Noor by Saara",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        collections: "Summer Breeze",
        material: "Cotton",
        images: [
            {
                url: "https://img.perniaspopupshop.com/catalog/product/m/s/MSBA0925138_1.jpg?impolicy=listingimagedesktop",
                altText: "Pastel Blue Chikankari Kurta Set",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.6,
        numReviews: 22,
        tags: [],
    },
    {

        name: "Beige Tissue Floral Print Suit Set With Beads",
        description:
            "A glamorous emerald green georgette sharara set with mirror and gota patti work. Includes a peplum-style kurta, flared sharara pants, and a dupatta for a royal festive look.",
        price: 100,
        discountPrice: 99,
        countInStock: 12,
        sku: "WS-003",
        category: "Suits",
        brand: "Soch",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige"],
        collections: "Festive Glam",
        material: "Georgette",
        images: [
            {
                url: "https://www.soch.com/media/catalog/product/b/e/beige_tissue_floral_print_suit_set_with_beads_womens_soch-ewa5cd22269a_01.jpg?width=440&height=660g",
                altText: "Emerald Green Mirror Work Sharara Set",
            },
            {
                url: "https://www.soch.com/media/catalog/product/b/e/beige_tissue_floral_print_suit_set_with_beads_womens_soch-ewa5cd22269a_04.jpg?width=1200",
                altText: "Emerald Green Mirror Work Sharara Set",
            }
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.7,
        numReviews: 20,
        tags: [],

    },
    {

        name: "Bhavika Cotton Suit Set",
        description:
            "A luxurious suit in radiant rani pink, featuring golden zari floral motifs and a detailed pallu. Comes with an unstitched matching blouse piece.",
        price: 2299,
        discountPrice: 1999,
        countInStock: 8,
        sku: "WS-005",
        category: "Sarees",
        brand: "Bunaai",
        sizes: ["M", "L", "XL"],
        colors: ["Blue"],
        collections: "Royal Banaras",
        material: "Silk",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Festive-6305.jpg?v=1726891510",
                altText: "Rani Pink Banarasi Saree",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/Festive-6349.jpg?v=1726891510",
                altText: "Rani Pink Banarasi Saree",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 5,
        numReviews: 30,
        tags: [],
    },
    {

        name: "Gajri Cotton Suit Set",
        description:
            "Vibrant yellow gota patti suit featuring a straight-cut kurta, churidar, and organza dupatta. Ideal for haldi, mehendi, or festive occasions.",
        price: 1299,
        discountPrice: 1099,
        countInStock: 20,
        sku: "WS-006",
        category: "Suits",
        brand: "Bunaai",
        sizes: ["S", "M", "L", "XL"],
        colors: ["pink", "red"],
        collections: "Festive Glow",
        material: "Georgette",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8259.jpg?v=1752749739",
                altText: "Gajri Cotton Suit Set",

            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8276.jpg?v=1752749739",
                altText: "Gajri Cotton Suit Set",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.7,
        numReviews: 27,
        tags: [],


    },
    {

        name: "Grey Organza Solid Saree With Mirror And Stone",
        description:
            "Lightweight peach organza saree highlighted with a gold zari border and minimal sequin work. Comes with an unstitched blouse piece.",
        price: 1399,
        discountPrice: 1249,
        countInStock: 15,
        sku: "WS-007",
        category: "Sarees",
        brand: "Soch",
        sizes: ["Free Size"],
        colors: ["Peach", "Gold"],
        collections: "Elegant Drapes",
        material: "Organza",
        images: [
            {
                url: "https://www.soch.com/media/catalog/product/g/r/grey_organza_solid_saree_with_mirror_and_stone_womens_soch-srevebl119533e_01.jpg?width=454&optimize=medium",
                altText: "Grey Organza Solid Saree With Mirror And Stone",
            },
            {
                url: "https://www.soch.com/media/catalog/product/g/r/grey_organza_solid_saree_with_mirror_and_stone_womens_soch-srevebl119533e_04.jpg?width=1200",
                altText: "Grey Organza Solid Saree With Mirror And Stone",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.8,
        numReviews: 21,
        tags: [],


    },
    {

        name: "Teal Blue Organza Saree With Stone Work",
        description:
            "A dreamy lavender net suit with sequin embroidery and soft satin lining. Comes with a dupatta featuring lace detailing for an ethereal look.",
        price: 1799,
        discountPrice: 1549,
        countInStock: 10,
        sku: "WS-008",
        category: "Suits",
        brand: "Soch",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Lavender", "Silver"],
        collections: "Evening Glam",
        material: "Net",
        images: [
            {
                url: "https://www.soch.com/media/catalog/product/t/e/teal_green_organza_saree_with_stone_work_womens_soch-srevebl120757a_01.jpg?width=820",
                altText: "Teal Blue Organza Saree With Stone Work",
            },
            {
                url: "https://www.soch.com/media/catalog/product/t/e/teal_green_organza_saree_with_stone_work_womens_soch-srevebl120757a_03.jpg?width=1200",
                altText: "Teal Blue Organza Saree With Stone Work",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.9,
        numReviews: 16,
        tags: [],


    },
    {

        name: "Wine Chanderi Woven Design Saree With Tassels",
        description:
            "A stunning blush pink Anarkali suit featuring intricate Aari embroidery on the bodice and sleeves. Crafted from premium georgette with a flared silhouette, this suit is paired with matching churidar and dupatta. Ideal for festive and wedding occasions.",
        price: 1200,
        discountPrice: 1000,
        countInStock: 15,
        sku: "WS-001",
        category: "Suits",
        brand: "Soch",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Pink", "Red"],
        collections: "Festive Collection",
        material: "Georgette",
        images: [
            {
                url: "https://www.soch.com/media/catalog/product/w/i/wine_chanderi_woven_design_saree_with_tassels_womens_soch-srevjq114184a_01.jpg?width=820",
                altText: "Wine Chanderi Woven Design Saree With Tassels",

            },
            {
                url: "https://www.soch.com/media/catalog/product/w/i/wine_chanderi_woven_design_saree_with_tassels_womens_soch-srevjq114184a_04.jpg?width=1200",
                altText: "Wine Chanderi Woven Design Saree With Tassels",

            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.8,
        numReviews: 26,
        tags: [],

    },
    {

        name: "Lavender Fendy Georgette Embroidered Saree With Stone Work",
        description:
            "An elegant ivory organza saree adorned with delicate hand-embroidered floral motifs. Comes with a matching unstitched blouse piece. Perfect for weddings and special occasions.",
        price: 800,
        discountPrice: 759,
        countInStock: 10,
        sku: "WS-002",
        category: "Sarees",
        brand: "Soch",
        sizes: ["Free Size"],
        colors: ["Ivory", "Gold"],
        collections: "Wedding Edit",
        material: "Organza",
        images: [
            {
                url: "https://www.soch.com/media/catalog/product/l/a/lavender_fendy_georgette_embroidered_saree_with_stone_work_womens_soch-srevemb125971c_01.jpg?width=820",
                altText: "Lavender Fendy Georgette Embroidered Saree With Stone Work",
            },
            {
                url: "https://www.soch.com/media/catalog/product/l/a/lavender_fendy_georgette_embroidered_saree_with_stone_work_womens_soch-srevemb125971c_03.jpg?width=1200",
                altText: "Lavender Fendy Georgette Embroidered Saree With Stone Work",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.9,
        numReviews: 18,
        tags: [],


    },
    //
    {

        name: "Black Embroidered Suit Set",
        description:
            "Masaba presents a cranberry red saree in dupion and jacquard organza base with kolar mocha motif embroidery. It is paired with a dupion blouse. Style this luxurious saree with statement earrings and bangles for a wedding or festive occasion to complement the regal vibe.",
        price: 999,
        discountPrice: 899,
        countInStock: 25,
        sku: "WS-009",
        category: "Suits",
        brand: "Bunaai",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black"],
        collections: "Summer Breeze",
        material: "Cotton",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8687.jpg?v=1752749695",
                altText: "Pastel Blue Chikankari Kurta Set",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-9046.jpg?v=1751957284",
                altText: "Pastel Blue Chikankari Kurta Set",
            }
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.6,
        numReviews: 22,
        tags: [],


    },
    {

        name: "Bunaai Purple Dress with Dupatta",
        description:
            "A glamorous emerald green georgette sharara set with mirror and gota patti work. Includes a peplum-style kurta, flared sharara pants, and a dupatta for a royal festive look.",
        price: 18999,
        discountPrice: 1599,
        countInStock: 12,
        sku: "WS-010",
        category: "Suits",
        brand: "Bunaai",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Emerald Green"],
        collections: "Festive Glam",
        material: "Georgette",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Bunaai-00817.jpg?v=1741245824",
                altText: "Emerald Green Mirror Work Sharara Set",

            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/Bunaai-00821.jpg?v=1741245824",
                altText: "Emerald Green Mirror Work Sharara Set",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.7,
        numReviews: 20,
        tags: [],


    },
    {

        name: "Purple Bandhej Cotton Suit Set",
        description:
            "A luxurious suit in radiant rani pink, featuring golden zari floral motifs and a detailed pallu. Comes with an unstitched matching blouse piece.",
        price: 999,
        discountPrice: 899,
        countInStock: 8,
        sku: "WS-011",
        category: "Sarees",
        brand: "Bunaai",
        sizes: ["M", "L", "XL"],
        colors: ["Rani Pink", "Gold"],
        collections: "Royal Banaras",
        material: "Cotton",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/SV-20240716-4216.jpg?v=1722084884",
                altText: "Rani Pink Banarasi Saree",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/SV-20240716-4232.jpg?v=1722084902",
                altText: "Rani Pink Banarasi Saree"
            }
        ],
        isFeatured: false,
        isPublished: true,
        rating: 5,
        numReviews: 30,
        tags: [],


    },
    {

        name: "Mystical Tissue Silk Saree",
        description:
            "Vibrant yellow gota patti suit featuring a straight-cut kurta, churidar, and organza dupatta. Ideal for haldi, mehendi, or festive occasions.",
        price: 899,
        discountPrice: 799,
        countInStock: 20,
        sku: "WS-012",
        category: "Suits",
        brand: "Bunaai",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Yellow", "purple"],
        collections: "Festive Glow",
        material: "Silk",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-5432.jpg?v=1751446935",
                altText: "Yellow Georgette Gota Patti Suit",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-5447.jpg?v=1751446935",
                altText: "Yellow Georgette Gota Patti Suit",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.7,
        numReviews: 27,
        tags: [],


    },
    {

        name: "Carnation Tissue Saree",
        description:
            "Lightweight peach organza saree highlighted with a gold zari border and minimal sequin work. Comes with an unstitched blouse piece.",
        price: 1399,
        discountPrice: 1249,
        countInStock: 15,
        sku: "WS-013",
        category: "Sarees",
        brand: "Bunaai",
        sizes: ["Free Size"],
        colors: ["Purple", "Pink"],
        collections: "Elegant Drapes",
        material: "Organza",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-6993.jpg?v=1751446909",
                altText: "Carnation Tissue Saree",
            },
            {
                url: "https://www.bunaai.com/products/carnation-tissue-saree?_pos=1&_sid=d21e67615&_ss=r",
                altText: "Carnation Tissue Saree",
            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.8,
        numReviews: 21,
        tags: [],


    },
    {

        name: "Bunaai Black Georgette Draped Saree",
        description:
            "A dreamy lavender net suit with sequin embroidery and soft satin lining. Comes with a dupatta featuring lace detailing for an ethereal look.",
        price: 3999,
        discountPrice: 2000,
        countInStock: 10,
        sku: "WS-014",
        category: "Suits",
        brand: "Aira Designs",
        sizes: ["S", "M", "L", "XL"],
        colors: ["red", "black"],
        collections: "Evening Glam",
        material: "Georgette",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-3722.jpg?v=1706938206",
                altText: "Lavender Net Embroidered Suit",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-3727.jpg?v=1706938208",
                altText: "Lavender Net Embroidered Suit",
            }
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.9,
        numReviews: 16,
        tags: [],
    },
    {

        name: "Nandini Georgette Suit Set",
        description:
            "A stunning blush pink Anarkali suit featuring intricate Aari embroidery on the bodice and sleeves. Crafted from premium georgette with a flared silhouette, this suit is paired with matching churidar and dupatta. Ideal for festive and wedding occasions.",
        price: 699,
        discountPrice: 555,
        countInStock: 15,
        sku: "WS-015",
        category: "Suits",
        brand: "Bunaai",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Orange", "red"],
        collections: "Festive Collection",
        material: "Georgette",

        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/Festive-3668.jpg?v=1726888279",
                altText: "Blush Aari Work Anarkali Suit Set Front View",

            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/Festive-3718.jpg?v=1726888279",
                altText: "Blush Aari Work Anarkali Suit Set Back View",

            },
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.8,
        numReviews: 26,
        tags: [],


    },
    {

        name: "Yellow Bandhej Cotton Suit Set",
        description:
            "An elegant ivory organza saree adorned with delicate hand-embroidered floral motifs. Comes with a matching unstitched blouse piece. Perfect for weddings and special occasions.",
        price: 500,
        discountPrice: 399,
        countInStock: 10,
        sku: "WS-016",
        category: "Sarees",
        brand: "Meera Silks",
        sizes: ["XL", "L"],
        colors: ["Yellow", "Red"],
        collections: "Wedding Edit",
        material: "Cotton",
        images: [
            {
                url: "https://www.bunaai.com/cdn/shop/files/SV-20240716-4246.jpg?v=1722084962",
                altText: "Ivory Organza Saree with Floral Embroidery",
            },
            {
                url: "https://www.bunaai.com/cdn/shop/files/SV-20240716-4252.jpg?v=1722084933",
                altText: "Ivory Organza Saree with Floral Embroidery",
            }
        ],
        isFeatured: false,
        isPublished: true,
        rating: 4.9,
        numReviews: 18,
        tags: [],
    },

];


module.exports = products;