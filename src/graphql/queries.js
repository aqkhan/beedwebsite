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
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    first_name
    last_name
    email
    thumbnail
    store {
      id
      Name
      description
      location
      email
      users {
        nextToken
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first_name
      last_name
      email
      thumbnail
      store {
        id
        Name
        description
        location
        email
      }
    }
    nextToken
  }
}
`;
export const getStore = `query GetStore($id: ID!) {
  getStore(id: $id) {
    id
    Name
    description
    location
    email
    users {
      items {
        id
        first_name
        last_name
        email
        thumbnail
      }
      nextToken
    }
  }
}
`;
export const listStores = `query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Name
      description
      location
      email
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
