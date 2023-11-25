const Category = require("./Category");
 const Product = require("./Product");
 const Image = require("./Image")


Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Image);
Image.belongsTo(Product);