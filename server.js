const express = require("express");
const path = require("path");

// DB connections
const connectProductDB = require("./db/productDB");
const connectUserDB = require("./db/userDB");

// Models
const createProductModel = require("./models/productModel");
const createUserModel = require("./models/customerModel");
const createCartModel = require("./models/cartModel");
<<<<<<< HEAD
const createAssetsModel = require("./models/assetModel");

=======
const createVariantModel = require("./models/variantModel");
const createReviewModel = require("./models/reviewModel");
const createOrderModel = require("./models/oredersModel");
>>>>>>> be95b3fa74769e27764d81d51d83cf4e6d32a030


// Routes
const postNewProductRoute = require("./routers/products/postNewProduct");
const deleteProductRoute = require("./routers/products/deleteProduct");
const updateProductRoute = require("./routers/products/putProduct");
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
<<<<<<< HEAD
const deleteCartRoute = require("./routers/cart/deleteCart");
const putCartRoute = require("./routers/cart/putCart");
const postAssetsRoute = require("./routers/products/assets/postAssets");
const getAssetsRoute =require("./routers/products/assets/getAssets");
const putAssetRoute = require("./routers/products/assets/putAssets");
const deleteAssetsRoute = require("./routers/products/assets/deleteAssets");
=======
const deleteCartRoute = require("./routers/carts/deleteCart");
const putCartRoute= require("./routers/carts/putCart");


const getCart = require("./routers/carts/getCart.js");
const postOrderRoute = require("./routers/orders/postNewOrder.js");
const deleteOrderRoute = require("./routers/orders/deleteOrder.js");
const updateOrderRoute = require("./routers/orders/putOrder.js");
const getOrderRoute = require("./routers/orders/getOrder.js");
const getOrderbycusRoute = require("./routers/orders/getOrderbyCustomer.js");
>>>>>>> be95b3fa74769e27764d81d51d83cf4e6d32a030

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
<<<<<<< HEAD
    const Assets =createAssetsModel(productDB); 
=======
    const Variant = createVariantModel(productDB);
    const Review = createReviewModel(productDB);
    const Order = createOrderModel(userDB);

>>>>>>> be95b3fa74769e27764d81d51d83cf4e6d32a030

    // 3️⃣ Mount routes
    app.use("/products", postNewProductRoute(Product));
    app.use("/products", deleteProductRoute(Product));
    app.use("/products", updateProductRoute(Product));
    app.use("/users", postNewUserRoute(User));
    app.use("/users", deleteUserRoute(User));
    app.use("/users", updateCustomerRoute(User));
    app.use("/cart",postAddCartRoute(Cart));
    app.use("/cart",getCartRoute(Cart));
    app.use("/cart", deleteCartRoute(Cart));
<<<<<<< HEAD
    app.use("/cart", putCartRoute(Cart));
    app.use("/assets",postAssetsRoute(Assets));
    app.use("/assets",putAssetRoute(Assets));
    app.use("/assets",getAssetsRoute(Assets));
    app.use("/assets",deleteAssetsRoute(Assets));

=======
    app.use("/variants", postNewVariantRoute(Variant));
    app.use("/variants", deleteVariantRoute(Variant)); 
    app.use("/variants", updateVariantRoute(Variant));
    app.use("/variants", getVariantRoute(Variant));
    app.use("/reviews", postReviewRoute(Review));
    app.use("/reviews", deleteReviewRoute(Review));
    app.use("/reviews", updateReviewRoute(Review));
    app.use("/reviews", getReviewRoute(Review));
    app.use("/orders", postOrderRoute(Order));
    app.use("/orders",deleteOrderRoute(Order));
    app.use("/orders",updateOrderRoute(Order));
    app.use("/orders",getOrderRoute(Order));
    app.use("/orders",getOrderbycusRoute(Order));
    // delete route mounted after User model is ready
  
  
>>>>>>> be95b3fa74769e27764d81d51d83cf4e6d32a030
    // 4️⃣ Start server
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  } catch (err) {
    console.error("❌ Server initialization failed:", err.message);
    process.exit(1); // stop server if DB connection fails
  }
})();
