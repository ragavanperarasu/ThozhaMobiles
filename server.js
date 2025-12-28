const express = require("express");
const path = require("path");

// DB connections
const connectProductDB = require("./db/productDB");
const connectUserDB = require("./db/userDB");

// Models
const createProductModel = require("./models/productModel");
const createUserModel = require("./models/customerModel");
const createCartModel = require("./models/cartModel");


// Routes
const postNewProductRoute = require("./routers/products/postNewProduct");
const deleteProductRoute = require("./routers/products/deleteProduct");
const updateProductRoute = require("./routers/products/putProduct");
const postNewUserRoute = require("./routers/users/postNewuser");
<<<<<<< HEAD
const deleteUserRoute = require("./routers/users/deleteuser");
const updateCustomerRoute = require("./routers/users/putUser");
const postAddCartRoute = require("./routers/cart/postAddCart") ;// matches your file name
=======
const deleteUserRoute = require("./routers/users/deleteUser");
const updateCustomerRoute = require("./routers/users/putUser");
const getUserRoute = require("./routers/users/getUser");
 // matches your file name
>>>>>>> 74566a58c1f12893ba2303cfcd3beda52efebcff

const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

(async () => {
  try {
    // 1️⃣ Connect to databases
    const productDB = await connectProductDB();
    console.log("✅ Product DB connected");
    const userDB = await connectUserDB();
    console.log("✅ User DB connected");

    // 2️⃣ Create models
    const Product = createProductModel(productDB);
    const User = createUserModel(userDB);
    const Cart = createCartModel(userDB);

    // 3️⃣ Mount routes
    app.use("/products", postNewProductRoute(Product));
    app.use("/products", deleteProductRoute(Product));
    app.use("/products", updateProductRoute(Product));
    app.use("/users", postNewUserRoute(User));
    app.use("/users", deleteUserRoute(User));
    app.use("/users", updateCustomerRoute(User));
<<<<<<< HEAD
    app.use("/cart",postAddCartRoute(Cart)); // delete route mounted after User model is ready
=======
    app.use("/users", getUserRoute(User));
 // delete route mounted after User model is ready
>>>>>>> 74566a58c1f12893ba2303cfcd3beda52efebcff

    // 4️⃣ Start server
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  } catch (err) {
    console.error("❌ Server initialization failed:", err.message);
    process.exit(1); // stop server if DB connection fails
  }
})();
