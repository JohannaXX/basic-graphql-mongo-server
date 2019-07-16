import { gql } from "apollo-server-express";

export const typeDefs = gql `

    enum ProductType {
        GAMING_PC
        BIKE
        DRONE
    }
    
    type Product {
        id: ID
        name: String!
        price: Int
        type: ProductType
        description: String
    }
      
    type Query {
        getProducts: [Product]
        product(name: String): Product!
    }

    type Mutation {
        createProduct(id: ID, name: String, price: Int, type: String, description: String): Product!
        deleteProduct(name: String): Product!
        updateProduct(id: ID, name: String, price: Int, type: String, description: String): Product!
    }
`;
