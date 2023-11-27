const Category = require("./Category");
 const Product = require("./Product");
 const Image = require("./Image");
 const Cart = require("../models/Cart");
 const User = require("./User")


Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Image);
Image.belongsTo(Product);

Product.hasMany(Cart);
Cart.belongsTo(Product);

User.hasMany(Cart);
Cart.belongsTo(User)