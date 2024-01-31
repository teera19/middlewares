const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dirmbme33",
  api_key: "336454197532225",
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;