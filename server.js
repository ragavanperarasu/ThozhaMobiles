const express = require("express");
const path = require("path");

// DB connections
const connectProductDB = require("./db/productDB");
const connectUserDB = require("./db/userDB");

// Models
const createProductModel = require("./models/productModel");
const createUserModel = require("./models/customerModel");
const createCartModel = require("./models/cartModel");
const createAssetsModel = require("./models/assetModel");



// Routes
const postNewProductRoute = require("./routers/products/postNewProduct");
const deleteProductRoute = require("./routers/products/deleteProduct");
const updateProductRoute = require("./routers/products/putProduct");
const searchProductRoute = require("./routers/products/searchProduct");
const postNewUserRoute = require("./routers/users/postNewuser");
const deleteUserRoute = require("./routers/users/deleteuser");
const updateCustomerRoute = require("./routers/users/putUser");
const postAddCartRoute = require("./routers/carts/postAddCart.js") ;
const getCartRoute = require("./routers/carts/getCart.js");
const postNewVariantRoute = require("./routers/products/variants/postNewVariant");
const deleteVariantRoute = require("./routers/products/variants/deleteVariant");
const updateVariantRoute = require("./routers/products/variants/putVariant");// matches your file name
const getVariantRoute = require("./routers/products/variants/getVariant");
const postReviewRoute = require("./routers/products/reviews/postNewReview");
const deleteReviewRoute = require("./routers/products/reviews/deleteReview");

const updateReviewRoute = require("./routers/products/reviews/putReview");
const getReviewRoute = require("./routers/products/reviews/getReview");





const getUserRoute = require("./routers/users/getUser");
const deleteCartRoute = require("./routers/cart/deleteCart");
const putCartRoute = require("./routers/cart/putCart");
const postAssetsRoute = require("./routers/products/assets/postAssets");
const getAssetsRoute =require("./routers/products/assets/getAssets");
const putAssetRoute = require("./routers/products/assets/putAssets");
const deleteAssetsRoute = require("./routers/products/assets/deleteAssets");

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
    const Assets =createAssetsModel(productDB); 

    // 3️⃣ Mount routes
    app.use("/products", postNewProductRoute(Product));
    app.use("/products", deleteProductRoute(Product));
    app.use("/products", updateProductRoute(Product));
    app.use("/products", searchProductRoute(Product));
    app.use("/users", postNewUserRoute(User));
    app.use("/users", deleteUserRoute(User));
    app.use("/users", updateCustomerRoute(User));
    app.use("/cart",postAddCartRoute(Cart));
    app.use("/cart",getCartRoute(Cart));
    app.use("/cart", deleteCartRoute(Cart));
    app.use("/cart", putCartRoute(Cart));
    app.use("/assets",postAssetsRoute(Assets));
    app.use("/assets",putAssetRoute(Assets));
    app.use("/assets",getAssetsRoute(Assets));
    app.use("/assets",deleteAssetsRoute(Assets));

    // 4️⃣ Start server
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  } catch (err) {
    console.error("❌ Server initialization failed:", err.message);
    process.exit(1); // stop server if DB connection fails
  }
})();
