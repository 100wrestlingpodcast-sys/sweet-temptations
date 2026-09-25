/**
 * JB Sweet Temptations - Main Application Script
 * Coffee • Bakery • Cake Design | Magnolia, TX
 * Source: DoorDash Official Store (50 items, 40 photos, 7 categories)
 */

// ==========================================================================
// 1. Menu Data (Source of truth from DoorDash official store)
// ==========================================================================
const MENU_DATA = {
  "retrieved": "2026-09-25",
  "currency": "USD",
  "source": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/118793546/",
  "scope": "50 productos únicos organizados en 7 categorías con 40 fotos reales de la tienda oficial en DoorDash.",
  "notice": {
    "es": "Precios y menú actualizados de DoorDash. Puedes ordenar directamente a domicilio o llamarnos para recoger.",
    "en": "Prices and menu updated from DoorDash. Order for delivery or call us for pickup."
  },
  "categories": [
    {
      "id": "bottled_drinks",
      "name": {
        "es": "Bebidas embotelladas",
        "en": "Bottled Drinks"
      },
      "items": [
        {
          "id": "44678790574",
          "name": {
            "es": "Coca Cola",
            "en": "Coca Cola"
          },
          "displayPrice": "$3.25",
          "price": 3.25,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790574.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383337",
          "name": {
            "es": "Sprite",
            "en": "Sprite"
          },
          "displayPrice": "$3.25",
          "price": 3.25,
          "from": false,
          "description": null,
          "image": "assets/menu/44678383337.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790577",
          "name": {
            "es": "Perrier",
            "en": "Perrier"
          },
          "displayPrice": "$3.25",
          "price": 3.25,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790577.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790578",
          "name": {
            "es": "Bebida de naranja",
            "en": "Orange Drink"
          },
          "displayPrice": "$4.95",
          "price": 4.95,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383343",
          "name": {
            "es": "Leche",
            "en": "Milk"
          },
          "displayPrice": "$3.00",
          "price": 3.0,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383344",
          "name": {
            "es": "Leche con proteína",
            "en": "Protein milk"
          },
          "displayPrice": "$5.95",
          "price": 5.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44678383344.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790572",
          "name": {
            "es": "Limonada de pitahaya",
            "en": "Dragonfruit lemonade"
          },
          "displayPrice": "$4.75",
          "price": 4.75,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790573",
          "name": {
            "es": "Agua",
            "en": "Water"
          },
          "displayPrice": "$3.00",
          "price": 3.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790573.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "coffee_espresso",
      "name": {
        "es": "Café y espresso",
        "en": "Coffee & Espresso"
      },
      "items": [
        {
          "id": "44648627875",
          "name": {
            "es": "Mocha",
            "en": "Mocha"
          },
          "displayPrice": "$5.75",
          "price": 5.75,
          "from": false,
          "description": {
            "es": "Deliciosa mezcla de espresso y chocolate. Disponible en 12 oz o 16 oz.",
            "en": "Rich blend of espresso and chocolate, available in two sizes: 12 oz or 16 oz."
          },
          "image": "assets/menu/44648627875.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648627876",
          "name": {
            "es": "Caramel Macchiato",
            "en": "Caramel Macchiato"
          },
          "displayPrice": "$6.50",
          "price": 6.5,
          "from": false,
          "description": {
            "es": "Espresso en capas con leche vaporizada y llovizna de caramelo. Disponible en 12 oz o 16 oz.",
            "en": "Rich espresso layered with velvety steamed milk and caramel drizzle. Available in two sizes: 12 oz or 16 oz."
          },
          "image": "assets/menu/44648627876.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678382984",
          "name": {
            "es": "Café negro",
            "en": "Black Coffee"
          },
          "displayPrice": "$7.25+",
          "price": 7.25,
          "from": true,
          "description": {
            "es": "Opción de 12 oz o 16 oz. Recién colado y de sabor intenso.",
            "en": "Choice of 12 oz or 16 oz. Freshly brewed and bold."
          },
          "image": "assets/menu/44678382984.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648627882",
          "name": {
            "es": "Espresso doble",
            "en": "Espresso - 2 shots"
          },
          "displayPrice": "$0.75",
          "price": 0.75,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648627873",
          "name": {
            "es": "Latte",
            "en": "Latte"
          },
          "displayPrice": "$5.50",
          "price": 5.5,
          "from": false,
          "description": {
            "es": "Espresso cremoso con tu elección de leche de almendras o avena. Disponible en 12 oz o 16 oz.",
            "en": "Creamy espresso with your choice of almond or oat milk. Available in 12 oz or 16 oz sizes."
          },
          "image": "assets/menu/44648627873.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648627874",
          "name": {
            "es": "Cappuccino",
            "en": "Cappuccino"
          },
          "displayPrice": "$4.50",
          "price": 4.5,
          "from": false,
          "description": {
            "es": "Espresso con abundante espuma de leche. Disponible en 12 oz o 16 oz.",
            "en": "Rich espresso topped with foamed milk. Available in 12 oz or 16 oz sizes."
          },
          "image": "assets/menu/44648627874.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "iced_coffee",
      "name": {
        "es": "Bebidas frías",
        "en": "Iced Coffee"
      },
      "items": [
        {
          "id": "44678790461",
          "name": {
            "es": "Café helado de tiramisú",
            "en": "Tiramisú Iced Coffee"
          },
          "displayPrice": "$7.25+",
          "price": 7.25,
          "from": true,
          "description": {
            "es": "Café frío inspirado en el clásico postre italiano tiramisú. Disponible en 12 oz o 16 oz.",
            "en": "Chilled coffee inspired by classic Italian dessert tiramisú. Available in 12 oz or 16 oz sizes."
          },
          "image": null,
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648418745",
          "name": {
            "es": "Hazelnut Cloud",
            "en": "Hazelnut Cloud"
          },
          "displayPrice": "$6.75",
          "price": 6.75,
          "from": false,
          "description": {
            "es": "Café helado con suave espuma infusionada con avellana. Disponible en 12 oz o 16 oz.",
            "en": "Iced coffee with hazelnut-infused foam. Available in 12 oz or 16 oz."
          },
          "image": "assets/menu/44648418745.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648418746",
          "name": {
            "es": "Café helado crème brûlée",
            "en": "Creme Brulee Iced Coffee"
          },
          "displayPrice": "$6.75",
          "price": 6.75,
          "from": false,
          "description": {
            "es": "Infusionado con sabor a crème brûlée. Disponible en 12 oz o 16 oz. Dulce y refrescante.",
            "en": "Infused with creamy creme brulee flavor. Available in 12 oz or 16 oz sizes. Refreshing and sweet."
          },
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709201007",
          "name": {
            "es": "Matcha de fresa",
            "en": "Strawberry Matcha"
          },
          "displayPrice": "$9.25",
          "price": 9.25,
          "from": false,
          "description": null,
          "image": "assets/menu/44709201007.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648418741",
          "name": {
            "es": "JB Iced Coffee",
            "en": "JB Iced Coffee"
          },
          "displayPrice": "$6.25",
          "price": 6.25,
          "from": false,
          "description": {
            "es": "Café helado refrescante en 12 oz o 16 oz. Perfectamente frío para un impulso de energía.",
            "en": "Two refreshing sizes: 12 oz or 16 oz iced coffee. Perfectly chilled for a cool caffeine boost."
          },
          "image": "assets/menu/44648418741.png",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648418744",
          "name": {
            "es": "Café helado de azúcar morena",
            "en": "Brown Sugar Iced Coffee"
          },
          "displayPrice": "$6.75",
          "price": 6.75,
          "from": false,
          "description": {
            "es": "Dulzura de azúcar morena combinada con café helado. Disponible en 12 oz o 16 oz.",
            "en": "Brown sugar sweetness blended with iced coffee. Choose between 12 oz or 16 oz."
          },
          "image": "assets/menu/44648418744.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "pastries_bakery",
      "name": {
        "es": "Panadería y repostería",
        "en": "Pastries & Bakery"
      },
      "items": [
        {
          "id": "44648423601",
          "name": {
            "es": "Sunrise Croissant",
            "en": "Sunrise Croissant"
          },
          "displayPrice": "$8.95",
          "price": 8.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423601.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648423602",
          "name": {
            "es": "Sunrise Croissant sin huevo",
            "en": "Sunrise Croissant - No Egg"
          },
          "displayPrice": "$8.95",
          "price": 8.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423602.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648423607",
          "name": {
            "es": "Galleta de Nutella (3–4 oz)",
            "en": "Nutella Cookie (3-4 oz)"
          },
          "displayPrice": "$8.50",
          "price": 8.5,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423607.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648423606",
          "name": {
            "es": "Pain au chocolat",
            "en": "Pain au Chocolat"
          },
          "displayPrice": "$5.25",
          "price": 5.25,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423606.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709200973",
          "name": {
            "es": "Quesito",
            "en": "Quesito"
          },
          "displayPrice": "$4.95",
          "price": 4.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44709200973.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709200974",
          "name": {
            "es": "Quesito de chocolate Dubái",
            "en": "Quesito Dubai Chocolate"
          },
          "displayPrice": "$5.95",
          "price": 5.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44709200974.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709200977",
          "name": {
            "es": "Pastelillo de guayaba",
            "en": "Pastelillo guayaba"
          },
          "displayPrice": "$4.00",
          "price": 4.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44709200977.png",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709232402",
          "name": {
            "es": "Pastelillo de Nutella",
            "en": "Pastelillo Nutella"
          },
          "displayPrice": "$4.00",
          "price": 4.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44709232402.png",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44709200983",
          "name": {
            "es": "Pan sobao",
            "en": "Pan sobao"
          },
          "displayPrice": "$5.95",
          "price": 5.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44709200983.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648423599",
          "name": {
            "es": "Croissant clásico",
            "en": "Croissant (Plain)"
          },
          "displayPrice": "$4.75",
          "price": 4.75,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423599.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648423600",
          "name": {
            "es": "Croissant de almendras",
            "en": "Almond Croissant"
          },
          "displayPrice": "$7.95",
          "price": 7.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648423600.png",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "breakfast",
      "name": {
        "es": "Desayunos",
        "en": "Breakfast"
      },
      "items": [
        {
          "id": "44678383043",
          "name": {
            "es": "Waffle de banana y Nutella",
            "en": "Banana & Nutella Waffle"
          },
          "displayPrice": "$12.00",
          "price": 12.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44678383043.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790525",
          "name": {
            "es": "Waffle de tiramisú",
            "en": "Tiramisú Waffle"
          },
          "displayPrice": "$13.95",
          "price": 13.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790525.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648629375",
          "name": {
            "es": "JB Parfait",
            "en": "JB Parfait"
          },
          "displayPrice": "$10.95",
          "price": 10.95,
          "from": false,
          "description": {
            "es": "Yogur griego, granola, banana, fresa, almendras y miel.",
            "en": "Greek yogurt, granola, banana, strawberry, almonds & honey"
          },
          "image": "assets/menu/44648629375.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383045",
          "name": {
            "es": "Waffle de dulce de leche",
            "en": "Dulce de Leche Waffle"
          },
          "displayPrice": "$10.50",
          "price": 10.5,
          "from": false,
          "description": null,
          "image": "assets/menu/44678383045.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790524",
          "name": {
            "es": "Waffle de Nutella",
            "en": "Nutella Waffle"
          },
          "displayPrice": "$10.50",
          "price": 10.5,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790524.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790526",
          "name": {
            "es": "Waffle clásico",
            "en": "Plain Waffle"
          },
          "displayPrice": "$8.95",
          "price": 8.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790526.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648629373",
          "name": {
            "es": "Waffle de Nutella y fresa",
            "en": "Nutella & Strawberry Waffle"
          },
          "displayPrice": "$12.95",
          "price": 12.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648629373.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648629374",
          "name": {
            "es": "Avena",
            "en": "Oatmeal (Avena)"
          },
          "displayPrice": "$5.50",
          "price": 5.5,
          "from": false,
          "description": null,
          "image": "assets/menu/44648629374.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "milkshakes",
      "name": {
        "es": "Batidas",
        "en": "Milkshakes"
      },
      "items": [
        {
          "id": "44648630873",
          "name": {
            "es": "Batida de Oreo",
            "en": "Oreo Milkshake"
          },
          "displayPrice": "$10.95",
          "price": 10.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648630873.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648630877",
          "name": {
            "es": "Batida de guayaba",
            "en": "Guava Milkshake"
          },
          "displayPrice": "$10.95",
          "price": 10.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648630877.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    },
    {
      "id": "desserts",
      "name": {
        "es": "Postres",
        "en": "Desserts"
      },
      "items": [
        {
          "id": "44648632375",
          "name": {
            "es": "Tiramisú cuadrado",
            "en": "Tiramisu (Square)"
          },
          "displayPrice": "$8.50",
          "price": 8.5,
          "from": false,
          "description": null,
          "image": "assets/menu/44648632375.jpg",
          "isMostOrdered": true,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790540",
          "name": {
            "es": "Vasito de bizcocho de almendra",
            "en": "Almond cake cup"
          },
          "displayPrice": "$6.00",
          "price": 6.0,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648632379",
          "name": {
            "es": "Budín de pan con guayaba",
            "en": "Guava Bread Pudding"
          },
          "displayPrice": "$7.00",
          "price": 7.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44648632379.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383294",
          "name": {
            "es": "Porción de cheesecake de parcha",
            "en": "Passion fruit cheesecake slice"
          },
          "displayPrice": "$7.95",
          "price": 7.95,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790536",
          "name": {
            "es": "Porción de cheesecake de guayaba y coco",
            "en": "Guava & Coconut cheesecake slice"
          },
          "displayPrice": "$7.95",
          "price": 7.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44678790536.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678790539",
          "name": {
            "es": "Vasito de bizcocho de vainilla",
            "en": "Vanilla cake cup"
          },
          "displayPrice": "$6.00",
          "price": 6.0,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44678383297",
          "name": {
            "es": "Vasito de bizcocho red velvet",
            "en": "Red Velvet cake cup"
          },
          "displayPrice": "$6.00",
          "price": 6.0,
          "from": false,
          "description": null,
          "image": "assets/menu/44678383297.jpg",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648632374",
          "name": {
            "es": "Vasito de bizcocho de fresa",
            "en": "Strawberry cake cup"
          },
          "displayPrice": "$6.00",
          "price": 6.0,
          "from": false,
          "description": null,
          "image": null,
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        },
        {
          "id": "44648632373",
          "name": {
            "es": "Porción de cheesecake de fresa",
            "en": "Strawberry Cheesecake Slice"
          },
          "displayPrice": "$7.95",
          "price": 7.95,
          "from": false,
          "description": null,
          "image": "assets/menu/44648632373.png",
          "isMostOrdered": false,
          "orderUrl": "https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/"
        }
      ]
    }
  ]
};

// ==========================================================================
// 2. Bilingual Translation Dictionaries
// ==========================================================================
const TRANSLATIONS = {
  es: {
    page_title: "JB Sweet Temptations | Coffee • Bakery • Cake Design | Magnolia, TX",
    skip_to_content: "Saltar al contenido principal",
    nav_home: "Inicio",
    nav_specialties: "Especialidades",
    nav_menu: "Menú de comida",
    nav_gallery: "Galería",
    nav_story: "Nuestra historia",
    nav_location: "Ubicación y horarios",
    cta_call: "Llamar para ordenar",
    cta_call_short: "Llamar",
    cta_doordash: "Ordenar en DoorDash",
    cta_directions: "Cómo llegar",
    cta_explore_menu: "Ver menú",
    cta_facebook: "Ver página en Facebook",
    hero_badge: "Hecho con amor en Magnolia",
    hero_pill: "Coffee • Bakery • Cake Design",
    hero_title: "La vida es más dulce aquí.",
    hero_subtitle: "Café, repostería y galletas artesanales en Magnolia.",
    status_checking: "Verificando horario local...",
    status_open: "Abierto ahora • Te esperamos",
    status_closed: "Cerrado ahora • Consulta horarios",
    spec_kicker: "Nuestras especialidades",
    spec_title: "Pasión en cada bocado",
    spec_intro: "Descubre nuestras creaciones artesanales preparadas a diario con los mejores ingredientes.",
    spec_tag_coffee: "Café & Desayuno",
    spec_title_coffee: "Café y desayunos",
    spec_desc_coffee: "Espresso aromático, café helado especial, lattes, avena fresca, pan sobao y croissants horneados.",
    spec_link_coffee: "Ver opciones de café →",
    spec_tag_cakes: "Cake Design",
    spec_title_cakes: "Bizcochos y diseño",
    spec_desc_cakes: "Diseños personalizados para cumpleaños, bodas y ocasiones especiales, elaborados con técnica y detalle.",
    spec_link_cakes: "Consultar pedidos especiales →",
    spec_tag_pastries: "Repostería",
    spec_title_pastries: "Galletas y repostería",
    spec_desc_pastries: "Galletas estilo gourmet, quesitos, pastelillos de guayaba y postres en vasito llenos de sabor.",
    spec_link_pastries: "Ver dulces y postres →",
    menu_kicker: "Menú actualizado",
    menu_title: "Nuestra Carta Completa",
    menu_intro: "Explora nuestros 50 productos organizados en 7 categorías. Pide a domicilio por DoorDash o llámanos para recoger.",
    menu_notice: "Precios y menú actualizados de DoorDash. Puedes ordenar directamente a domicilio o llamarnos para recoger.",
    menu_search_placeholder: "Buscar producto (ej. latte, waffle, quesito, croissant)...",
    cat_all: "Todos",
    cat_most_ordered: "★ Más pedidos",
    badge_popular: "Más pedido",
    price_from: "Desde",
    order_item_btn: "Pedir",
    photo_coming_soon: "Foto próximamente",
    menu_empty_title: "No se encontraron productos",
    menu_empty_desc: "Intenta buscar con otra palabra o selecciona otra categoría.",
    menu_cta_heading: "¿Listo para hacer tu pedido?",
    menu_cta_subheading: "Llámanos directamente o pide tus favoritos a domicilio.",
    gallery_kicker: "Galería visual",
    gallery_title: "Momentos y Dulces Creaciones",
    gallery_intro: "Una mirada a nuestro espacio, bizcochos y favoritos de la casa en Magnolia.",
    story_kicker: "Nuestra historia",
    story_title: "Dulzura, Café y Pasión",
    story_p1: "JB Sweet Temptations reúne café, repostería y diseño de bizcochos en Magnolia.",
    story_p2: "Cada mañana preparamos con esmero café de especialidad, desayunos reconfortantes y postres artesanales para compartir alegría con nuestros vecinos y visitantes.",
    story_p3: "Ya sea que busques tu café favorito del día, un antojo dulce, un bizcocho personalizado para una fecha inolvidable o tu pan sobao al estilo de Puerto Rico, aquí siempre te esperamos con una sonrisa.",
    story_h1_t: "Café de calidad",
    story_h1_d: "Espresso, lattes y especialidades frías.",
    story_h2_t: "Bizcochos a medida",
    story_h2_d: "Diseño artesanal para tus celebraciones.",
    story_h3_t: "Repostería fresca",
    story_h3_d: "Croissants, quesitos, waffles y postres.",
    story_img1_badge: "Hecho con pasión artesanal",
    story_img2_badge: "Nuestro salón en Magnolia",
    story_img1_alt: "Retrato de la dueña de JB Sweet Temptations con delantal negro y bandeja de repostería artesanal",
    story_img2_alt: "Interior acogedor y decorado de JB Sweet Temptations en Magnolia",
    loc_kicker: "Visítanos",
    loc_title: "Ubicación y Horarios",
    loc_intro: "Estamos en el corazón de Magnolia, Texas. Pasa a disfrutar en nuestro salón o pide para llevar.",
    loc_badge: "126 Roy St, Suite C",
    loc_addr_heading: "Dirección",
    loc_open_maps: "Abrir indicaciones en Google Maps →",
    loc_hours_heading: "Horarios de atención",
    day_mon_fri: "Lunes a Viernes",
    time_mon_fri: "7:00 a. m. – 4:00 p. m.",
    day_sat: "Sábado",
    time_sat: "8:00 a. m. – 6:00 p. m.",
    day_sun: "Domingo",
    time_sun: "8:00 a. m. – 2:00 p. m.",
    loc_tz_note: "Zona horaria local: America/Chicago (Magnolia, TX)",
    loc_contact_heading: "Contacto directo",
    loc_social_heading: "Redes sociales",
    footer_links_title: "Navegación",
    footer_contact_title: "Contacto",
    footer_rights: "Todos los derechos reservados.",
    footer_pilot_note: "Versión piloto de presentación comercial.",
    bar_call: "Llamar",
    bar_menu: "Menú",
    bar_directions: "Cómo llegar",
    menu_open_btn_label: "Abrir menú de navegación",
    menu_close_btn_label: "Cerrar menú",
    lang_toggle_label: "Cambiar a inglés",
    lightbox_close_label: "Cerrar ampliación",
    lightbox_prev_label: "Foto anterior",
    lightbox_next_label: "Foto siguiente"
  },
  en: {
    page_title: "JB Sweet Temptations | Coffee • Bakery • Cake Design | Magnolia, TX",
    skip_to_content: "Skip to main content",
    nav_home: "Home",
    nav_specialties: "Specialties",
    nav_menu: "Food Menu",
    nav_gallery: "Gallery",
    nav_story: "Our Story",
    nav_location: "Location & Hours",
    cta_call: "Call to order",
    cta_call_short: "Call",
    cta_doordash: "Order on DoorDash",
    cta_directions: "Get directions",
    cta_explore_menu: "View menu",
    cta_facebook: "Visit Facebook page",
    hero_badge: "Crafted with love in Magnolia",
    hero_pill: "Coffee • Bakery • Cake Design",
    hero_title: "Life is sweeter here.",
    hero_subtitle: "Coffee, pastries and artisan cookies in Magnolia.",
    status_checking: "Checking business hours...",
    status_open: "Open now • Welcome",
    status_closed: "Closed now • Check hours below",
    spec_kicker: "Our Specialties",
    spec_title: "Passion in Every Bite",
    spec_intro: "Discover our handcrafted creations made fresh daily with the finest ingredients.",
    spec_tag_coffee: "Coffee & Breakfast",
    spec_title_coffee: "Coffee & Breakfast",
    spec_desc_coffee: "Aromatic espresso, iced specialty coffees, lattes, fresh oatmeal, pan sobao, and baked croissants.",
    spec_link_coffee: "Explore coffee options →",
    spec_tag_cakes: "Cake Design",
    spec_title_cakes: "Cakes & Custom Design",
    spec_desc_cakes: "Custom cake designs for birthdays, weddings, and special events, crafted with detail and care.",
    spec_link_cakes: "Inquire about custom cakes →",
    spec_tag_pastries: "Pastries",
    spec_title_pastries: "Cookies & Pastries",
    spec_desc_pastries: "Gourmet cookies, quesitos, guava pastelillos, and dessert cups bursting with flavor.",
    spec_link_pastries: "See pastries & desserts →",
    menu_kicker: "Updated Menu",
    menu_title: "Full Menu",
    menu_intro: "Explore all 50 items across 7 categories. Order delivery via DoorDash or call us for takeout pickup.",
    menu_notice: "Prices and menu updated from DoorDash. Order for delivery or call us for pickup.",
    menu_search_placeholder: "Search item (e.g. latte, waffle, quesito, croissant)...",
    cat_all: "All",
    cat_most_ordered: "★ Most Ordered",
    badge_popular: "Most Ordered",
    price_from: "From",
    order_item_btn: "Order",
    photo_coming_soon: "Photo coming soon",
    menu_empty_title: "No products found",
    menu_empty_desc: "Try searching with a different term or select another category.",
    menu_cta_heading: "Ready to place your order?",
    menu_cta_subheading: "Call us directly or order your favorites for delivery.",
    gallery_kicker: "Visual Gallery",
    gallery_title: "Sweet Moments & Creations",
    gallery_intro: "A glimpse into our bakery, cakes, and house favorites in Magnolia.",
    story_kicker: "Our Story",
    story_title: "Sweetness, Coffee & Passion",
    story_p1: "JB Sweet Temptations brings coffee, pastries and cake design together in Magnolia.",
    story_p2: "Every morning we passionately craft specialty coffee, comforting breakfasts, and artisanal desserts to bring joy to our community.",
    story_p3: "Whether you’re looking for your favorite daily coffee, a sweet treat, a custom cake for an unforgettable occasion, or Puerto Rican-style pan sobao, we’re always here to welcome you with a smile.",
    story_h1_t: "Quality Coffee",
    story_h1_d: "Espresso, lattes, and iced specialties.",
    story_h2_t: "Custom Cakes",
    story_h2_d: "Handcrafted design for your celebrations.",
    story_h3_t: "Fresh Bakery",
    story_h3_d: "Croissants, quesitos, waffles, and desserts.",
    story_img1_badge: "Handcrafted with love & passion",
    story_img2_badge: "Our cozy room in Magnolia",
    story_img1_alt: "Portrait of JB Sweet Temptations owner with black apron holding handcrafted pastry tray",
    story_img2_alt: "Cozy and decorated interior of JB Sweet Temptations in Magnolia",
    loc_kicker: "Visit Us",
    loc_title: "Location & Hours",
    loc_intro: "Conveniently located in the heart of Magnolia, Texas. Dine in our cozy room or take it to go.",
    loc_badge: "126 Roy St, Suite C",
    loc_addr_heading: "Address",
    loc_open_maps: "Open directions in Google Maps →",
    loc_hours_heading: "Opening Hours",
    day_mon_fri: "Monday to Friday",
    time_mon_fri: "7:00 AM – 4:00 PM",
    day_sat: "Saturday",
    time_sat: "8:00 AM – 6:00 PM",
    day_sun: "Sunday",
    time_sun: "8:00 AM – 2:00 PM",
    loc_tz_note: "Local timezone: America/Chicago (Magnolia, TX)",
    loc_contact_heading: "Direct Contact",
    loc_social_heading: "Social Media",
    footer_links_title: "Navigation",
    footer_contact_title: "Contact",
    footer_rights: "All rights reserved.",
    footer_pilot_note: "Commercial presentation pilot version.",
    bar_call: "Call",
    bar_menu: "Menu",
    bar_directions: "Directions",
    menu_open_btn_label: "Open navigation menu",
    menu_close_btn_label: "Close menu",
    lang_toggle_label: "Switch to Spanish",
    lightbox_close_label: "Close image preview",
    lightbox_prev_label: "Previous photo",
    lightbox_next_label: "Next photo"
  }
};

// ==========================================================================
// 3. State Management
// ==========================================================================
let currentLang = localStorage.getItem('jb_lang') || 'es';
let activeCategory = 'all';
let currentSearchTerm = '';
let currentGalleryIndex = 0;
let galleryItems = [];

// ==========================================================================
// 4. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initLiveHours();
  initMenu();
  initGallery();
  initCurrentYear();
});

// ==========================================================================
// 5. Language Switching System
// ==========================================================================
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('jb_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
  
  // Update HTML lang attribute & document title
  document.documentElement.lang = lang;
  document.title = dict.page_title;

  // Update text elements with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update alt attributes with [data-alt-i18n]
  document.querySelectorAll('[data-alt-i18n]').forEach(el => {
    const key = el.getAttribute('data-alt-i18n');
    if (dict[key]) {
      el.setAttribute('alt', dict[key]);
    }
  });

  // Update language switcher active indicator
  document.querySelectorAll('.lang-indicator').forEach(ind => {
    if (ind.getAttribute('data-lang') === lang) {
      ind.classList.add('active-lang');
    } else {
      ind.classList.remove('active-lang');
    }
  });

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.setAttribute('aria-label', dict.lang_toggle_label);
  }

  // Update search input placeholder & labels
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.placeholder = dict.menu_search_placeholder;
  }

  // Update accessible labels
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  if (menuToggleBtn) menuToggleBtn.setAttribute('aria-label', dict.menu_open_btn_label);

  const navCloseBtn = document.getElementById('nav-close-btn');
  if (navCloseBtn) navCloseBtn.setAttribute('aria-label', dict.menu_close_btn_label);

  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  if (lightboxCloseBtn) lightboxCloseBtn.setAttribute('aria-label', dict.lightbox_close_label);

  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  if (lightboxPrevBtn) lightboxPrevBtn.setAttribute('aria-label', dict.lightbox_prev_label);

  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  if (lightboxNextBtn) lightboxNextBtn.setAttribute('aria-label', dict.lightbox_next_label);

  // Re-render Category Tabs & Menu items
  renderCategoryTabs();
  renderMenuItems();
  updateLiveHoursDisplay();
}

// ==========================================================================
// 6. Navigation Drawer & Focus Trap
// ==========================================================================
function initNavigation() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const closeBtn = document.getElementById('nav-close-btn');
  const sideNav = document.getElementById('side-nav');
  const overlay = document.getElementById('nav-overlay');
  const navLinks = sideNav.querySelectorAll('.nav-link');

  function openNav() {
    sideNav.classList.add('open');
    overlay.classList.add('open');
    sideNav.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    sideNav.classList.remove('open');
    overlay.classList.remove('open');
    sideNav.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('open')) {
      closeNav();
    }
  });
}

// ==========================================================================
// 7. Live Hours & Status (America/Chicago Timezone)
// ==========================================================================
function getMagnoliaTime() {
  const now = new Date();
  const options = {
    timeZone: 'America/Chicago',
    hour12: false,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  let weekday = '';
  let hour = 0;
  let minute = 0;

  parts.forEach(p => {
    if (p.type === 'weekday') weekday = p.value;
    if (p.type === 'hour') hour = parseInt(p.value, 10);
    if (p.type === 'minute') minute = parseInt(p.value, 10);
  });

  return { weekday, hour, minute, decimalTime: hour + minute / 60 };
}

function checkIsOpen() {
  const { weekday, decimalTime } = getMagnoliaTime();

  // Schedule rules:
  // Mon-Fri: 7:00 AM (7.0) to 4:00 PM (16.0)
  // Sat: 8:00 AM (8.0) to 6:00 PM (18.0)
  // Sun: 8:00 AM (8.0) to 2:00 PM (14.0)
  if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)) {
    return decimalTime >= 7.0 && decimalTime < 16.0;
  } else if (weekday === 'Sat') {
    return decimalTime >= 8.0 && decimalTime < 18.0;
  } else if (weekday === 'Sun') {
    return decimalTime >= 8.0 && decimalTime < 14.0;
  }
  return false;
}

function updateLiveHoursDisplay() {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

  if (!dot || !text) return;

  const isOpen = checkIsOpen();
  if (isOpen) {
    dot.className = 'status-indicator-dot open';
    text.textContent = dict.status_open;
  } else {
    dot.className = 'status-indicator-dot closed';
    text.textContent = dict.status_closed;
  }
}

function initLiveHours() {
  updateLiveHoursDisplay();
  setInterval(updateLiveHoursDisplay, 60000);
}

// ==========================================================================
// 8. Interactive Menu System (DoorDash-Style Cards & Filters)
// ==========================================================================
function initMenu() {
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = currentSearchTerm ? 'flex' : 'none';
      }
      renderMenuItems();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchTerm = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      renderMenuItems();
    });
  }

  renderCategoryTabs();
  renderMenuItems();
}

function renderCategoryTabs() {
  const container = document.getElementById('category-tabs-container');
  if (!container) return;

  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  
  let html = `<button class="cat-tab ${activeCategory === 'all' ? 'active' : ''}" role="tab" aria-selected="${activeCategory === 'all'}" data-category="all">${dict.cat_all}</button>`;

  // Most ordered quick tab
  const isMostOrdAct = activeCategory === 'most_ordered';
  html += `<button class="cat-tab ${isMostOrdAct ? 'active' : ''}" role="tab" aria-selected="${isMostOrdAct}" data-category="most_ordered">${dict.cat_most_ordered}</button>`;

  MENU_DATA.categories.forEach(cat => {
    const isAct = activeCategory === cat.id;
    const catName = cat.name[currentLang] || cat.name.es;
    html += `<button class="cat-tab ${isAct ? 'active' : ''}" role="tab" aria-selected="${isAct}" data-category="${cat.id}">${catName}</button>`;
  });

  container.innerHTML = html;

  container.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCategory = tab.getAttribute('data-category');
      container.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderMenuItems();
    });
  });
}

function renderMenuItems() {
  const container = document.getElementById('menu-items-container');
  const emptyState = document.getElementById('menu-empty-state');
  if (!container) return;

  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  let allItems = [];

  MENU_DATA.categories.forEach(cat => {
    cat.items.forEach(item => {
      if (activeCategory === 'all') {
        allItems.push({ ...item, categoryName: cat.name[currentLang] || cat.name.es });
      } else if (activeCategory === 'most_ordered' && item.isMostOrdered) {
        allItems.push({ ...item, categoryName: cat.name[currentLang] || cat.name.es });
      } else if (activeCategory === cat.id) {
        allItems.push({ ...item, categoryName: cat.name[currentLang] || cat.name.es });
      }
    });
  });

  // Filter by search query if present
  if (currentSearchTerm) {
    allItems = allItems.filter(item => {
      const name = (item.name[currentLang] || item.name.es || '').toLowerCase();
      const desc = item.description ? (item.description[currentLang] || item.description.es || '').toLowerCase() : '';
      const cat = (item.categoryName || '').toLowerCase();
      return name.includes(currentSearchTerm) || desc.includes(currentSearchTerm) || cat.includes(currentSearchTerm);
    });
  }

  if (allItems.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  let html = '';
  allItems.forEach(item => {
    const name = item.name[currentLang] || item.name.es;
    const desc = item.description ? (item.description[currentLang] || item.description.es) : null;
    const rawPrice = item.displayPrice || (item.price != null ? `$${Number(item.price).toFixed(2)}` : '');
    const priceDisplay = rawPrice ? rawPrice.replace(/^\$+/, '$') : '';
    const popularBadge = item.isMostOrdered ? `<span class="menu-badge-popular">${dict.badge_popular}</span>` : '';
    const imgHtml = item.image ? `
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${name}" class="menu-card-img" width="95" height="95" loading="lazy" onerror="handleMenuImgError(this)">
      </div>
    ` : `
      <div class="menu-card-img-wrap menu-card-placeholder" role="img" aria-label="${dict.photo_coming_soon}">
        <svg class="placeholder-cam-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
        <span class="placeholder-text">${dict.photo_coming_soon}</span>
      </div>
    `;

    html += `
      <article class="doordash-item-card ${item.image ? 'has-img' : 'has-placeholder'}">
        <div class="menu-card-content">
          <div class="menu-card-header">
            ${popularBadge}
            <span class="menu-card-cat">${item.categoryName}</span>
          </div>
          <h4 class="menu-card-title">${name}</h4>
          ${desc ? `<p class="menu-card-desc">${desc}</p>` : ''}
          <div class="menu-card-footer">
            <span class="menu-card-price">${priceDisplay}</span>
            <a href="${item.orderUrl}" target="_blank" rel="noopener noreferrer" class="menu-card-order-btn" aria-label="${dict.order_item_btn} ${name} en DoorDash">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M22.04 8.7c-.3-.49-.78-.7-1.34-.7H7.72c-.85 0-1.57.55-1.78 1.37L4.06 17.1c-.24.96.48 1.9 1.48 1.9h12.98c.85 0 1.57-.55 1.78-1.37l1.88-7.73c.1-.4.04-.8-.14-1.2z"/></svg>
              <span>${dict.order_item_btn}</span>
            </a>
          </div>
        </div>
        ${imgHtml}
      </article>
    `;
  });

  container.innerHTML = html;
}

window.handleMenuImgError = function(imgEl) {
  const wrap = imgEl.parentElement;
  if (!wrap) return;
  const currentDict = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : (typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS.es : {});
  const text = currentDict.photo_coming_soon || 'Foto próximamente';
  wrap.className = 'menu-card-img-wrap menu-card-placeholder';
  wrap.setAttribute('role', 'img');
  wrap.setAttribute('aria-label', text);
  wrap.innerHTML = `
    <svg class="placeholder-cam-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
    <span class="placeholder-text">${text}</span>
  `;
};

// ==========================================================================
// 9. Lightbox Gallery System
// ==========================================================================
function initGallery() {
  const modal = document.getElementById('lightbox-modal');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const imgElement = document.getElementById('lightbox-img');
  const captionElement = document.getElementById('lightbox-caption');

  const galleryButtons = Array.from(document.querySelectorAll('.gallery-item-btn'));
  galleryItems = galleryButtons.map(btn => ({
    btn: btn,
    src: btn.getAttribute('data-img'),
    altEs: btn.getAttribute('data-alt-es'),
    altEn: btn.getAttribute('data-alt-en'),
    captionEs: btn.getAttribute('data-caption-es'),
    captionEn: btn.getAttribute('data-caption-en')
  }));

  let lastFocusedElement = null;

  function openLightbox(index) {
    currentGalleryIndex = index;
    lastFocusedElement = document.activeElement;
    updateLightboxContent();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function updateLightboxContent() {
    const item = galleryItems[currentGalleryIndex];
    if (!item) return;

    const alt = currentLang === 'en' ? item.altEn : item.altEs;
    const caption = currentLang === 'en' ? item.captionEn : item.captionEs;

    imgElement.src = item.src;
    imgElement.alt = alt;
    captionElement.textContent = caption;
  }

  function showNext() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  }

  galleryButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => openLightbox(idx));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

// ==========================================================================
// 10. Dynamic Year
// ==========================================================================
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
