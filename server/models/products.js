const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add name "],
    },

    productImage: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
