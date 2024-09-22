// productsDB Setup and Queries

// 1. Switch to the productsDB database (or create it if it doesn't exist)
use productsDB

// 2. Insert product data into the 'products' collection
db.products.insertMany([
  { id: 1, product_name: "Notebook", product_material: "Paper", price: 500, product_color: "Red" },
  { id: 2, product_name: "Pen", product_material: "Plastic", price: 200, product_color: "Blue" },
  { id: 3, product_name: "Pencil", product_material: "Wood", price: 50, product_color: "Black" },
  { id: 4, product_name: "Eraser", product_material: "Rubber", price: 30, product_color: "White" },
  { id: 5, product_name: "Ruler", product_material: "Plastic", price: 60, product_color: "Yellow" },
  { id: 6, product_name: "Sharpener", product_material: "Metal", price: 25, product_color: "Silver" },
  { id: 7, product_name: "Sketchbook", product_material: "Paper", price: 650, product_color: "Green" },
  { id: 8, product_name: "Marker", product_material: "Plastic", price: 120, product_color: "Black" },
  { id: 9, product_name: "Crayons", product_material: "Wax", price: 400, product_color: "Mixed" },
  { id: 10, product_name: "Glue", product_material: "Adhesive", price: 492, product_color: "Indigo" },
  { id: 11, product_name: "Scissors", product_material: "Metal", price: 800, product_color: "Pink" }
])

// 3. Run MongoDB queries

// Query 1: Find all the information about each product
db.products.find({})

// Query 2: Find the product prices which are between 400 and 800
db.products.find({
  price: { $gte: 400, $lte: 800 }
})

// Query 3: Find the product prices which are not between 400 to 600
db.products.find({
  price: { $not: { $gte: 400, $lte: 600 } }
})

// Query 4: List the four products which are greater than 500 in price
db.products.find({
  price: { $gt: 500 }
}).limit(4)

// Query 5: Find the product name and product material of each product
db.products.find({}, {
  product_name: 1,
  product_material: 1,
  _id: 0
})

// Query 6: Find the product with a row id of 10
db.products.find({
  id: 10
})

// Query 7: Find only the product name and product material
db.products.find({}, {
  product_name: 1,
  product_material: 1,
  _id: 0
})

// Query 8: Find all products which contain the value of 'soft' in product material
db.products.find({
  product_material: { $regex: /soft/i }
})

// Query 9: Find products which contain product color 'indigo' and product price 492.00
db.products.find({
  product_color: "Indigo",
  price: 492
})

// Query 10: Delete the products which have a product price value of 28
db.products.deleteMany({
  price: 28
})