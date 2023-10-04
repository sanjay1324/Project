import product1 from "./assets/computer.jpg";
import product2 from "./assets/1.jpg";
import product3 from "./assets/cpu.jpg";
import product4 from "./assets/Gpu.jpg";
import product5 from "./assets/speaker.jpg";
import product6 from "./assets/usb.jpg";

export const PRODUCTS =[
    {
        id:1,
        productName:"Desktop",
        price:999.0,
        productImage: product1,
    },

    {
        id:2,
        productName:"Laptop",
        price:999.0,
        productImage: product2,
    },
    {
        id:3,
        productName:"CPU",
        productImage: product3,
    },
    {
        id:4,
        productName:"GPU",
        price:999.0,
        productImage: product4,
    },
    {
        id:5,
        productName:"USB Cables",
        price:999.0,
        productImage: product5,
    },{
        id:6,
        productName:"Speaker",
        price:999.0,
        productImage: product6,
    },
    
];

// src/data.js
export const CATEGORYPRODUCTS = [
    { id: 1, category: 'Computers', name: 'HP', productImage:product1 },
    { id: 2, category: 'Computers', name: 'Lenovo', productImage:product1 },
    { id: 3, category: 'Computers', name: 'Asus' , productImage:product1},
    { id: 4, category: 'Computers', name: 'MacBook', productImage:product1 },
    { id: 5, category: 'Computers', name: 'Dell' , productImage:product1},
    // Add more categories and products as needed
  ];
  
