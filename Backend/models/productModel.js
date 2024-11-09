import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },

    mark: {type: String , required:true},
    name: {type: String , required:true},
    price: {
        type: Number,
        required: true,
        default: 0,
      },
    flavors: {type: Number , required:true},
    sizes: {type: Number , required:true},
    rating: {type: Number , required:true},
    reviews: {type: Number , required:true},
    imageUrl: {type: String , required:true},
    
}, {timestamps : true})

const Product = mongoose.model('Product', productSchema);

export default Product;