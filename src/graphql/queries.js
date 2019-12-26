/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarm = `query GetFarm($id: ID!) {
  getFarm(id: $id) {
    id
    name
    location
    email
    products {
      items {
        id
        title
        description
        price
        thumbnail
      }
      nextToken
    }
  }
}
`;
export const listFarms = `query ListFarms(
  $filter: ModelFarmFilterInput
  $limit: Int
  $nextToken: String
) {
  listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      location
      email
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    description
    price
    thumbnail
    farm {
      id
      name
      location
      email
      products {
        nextToken
      }
    }
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      price
      thumbnail
      farm {
        id
        name
        location
        email
      }
    }
    nextToken
  }
}
`;
