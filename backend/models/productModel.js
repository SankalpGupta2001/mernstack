import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      noofvideo: {
        type: Number,
        required: true,
      },
      coursetime: {
        type: Number,
        required: true,
      },
      profile:{
        type:String,
        required:true
      },
      username:{
        type:String,
        required:true
      }
    },
    {
      timestamps: true,
    }
  )
  
  const Product=mongoose.model("Product",productSchema);
  export default Product;