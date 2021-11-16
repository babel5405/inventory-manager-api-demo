var { buildSchema } = require('graphql');
import { PrismaClient } from '@prisma/client'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Category {
    id: Int
    name: String
    description: String
  }

  type Location {
    id: Int
    name: String
    description: String
  }

  type Item {
    id: Int
    name: String
    description: String
    locationId: Int
    categoryId: Int
  }

  type Mutation {
    AddCategory(name: String!, description: String!): Category
    AddLocation(name: String!, description: String!): Location
    AddItem(name: String!, description: String!, locationId: Int!, categoryId: Int!): Item
    RemoveCategory(id: Int!) : String
    RemoveLocation(id: Int!) : String
    RemoveItem(id: Int!) : String
  }

  type Query {
    GetLocation(name: String, id: Int): Location
    GetAllLocations: [Location]
    GetCategory(name: String, id: Int): Category
    GetAllCategories: [Category]
    GetItem(name: String, id: Int): Item
    GetAllItems: [Item]
    GetAllItemsAtLocation(locationId: Int!): [Item]
    GetAllItemsAtCategory(categoryId: Int!): [Item]
  }
`);

export default schema;