import { Product } from "./models/Product";


export const resolvers = {
    Query: {
        getProducts: async () => await Product.find({}).exec(),
        product: async(_, {name}) => await Product.findOne({name}).exec()
    },
    Mutation: {
        createProduct: (_, {name, type, price, description}) => {
            const product = new Product({name, type, price, description});
            return product.save();
        },
        deleteProduct: async(_, {name}) => await Product.findOneAndDelete({name}).exec(),
        updateProduct: async(_, {name, price, type, description}) => await Product.findOneAndUpdate({name},{price, type, description}).exec()
    }
}
