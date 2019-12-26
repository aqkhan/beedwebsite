/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarm = `mutation CreateFarm(
  $input: CreateFarmInput!
  $condition: ModelFarmConditionInput
) {
  createFarm(input: $input, condition: $condition) {
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
export const updateFarm = `mutation UpdateFarm(
  $input: UpdateFarmInput!
  $condition: ModelFarmConditionInput
) {
  updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = `mutation DeleteFarm(
  $input: DeleteFarmInput!
  $condition: ModelFarmConditionInput
) {
  deleteFarm(input: $input, condition: $condition) {
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
export const createProduct = `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
export const updateProduct = `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createStore = `mutation CreateStore(
  $input: CreateStoreInput!
  $condition: ModelStoreConditionInput
) {
  createStore(input: $input, condition: $condition) {
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
export const updateStore = `mutation UpdateStore(
  $input: UpdateStoreInput!
  $condition: ModelStoreConditionInput
) {
  updateStore(input: $input, condition: $condition) {
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
export const deleteStore = `mutation DeleteStore(
  $input: DeleteStoreInput!
  $condition: ModelStoreConditionInput
) {
  deleteStore(input: $input, condition: $condition) {
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
