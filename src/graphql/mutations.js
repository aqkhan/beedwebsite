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
