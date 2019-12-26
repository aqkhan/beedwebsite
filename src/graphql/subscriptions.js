/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFarm = `subscription OnCreateFarm {
  onCreateFarm {
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
export const onUpdateFarm = `subscription OnUpdateFarm {
  onUpdateFarm {
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
export const onDeleteFarm = `subscription OnDeleteFarm {
  onDeleteFarm {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateStore = `subscription OnCreateStore {
  onCreateStore {
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
export const onUpdateStore = `subscription OnUpdateStore {
  onUpdateStore {
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
export const onDeleteStore = `subscription OnDeleteStore {
  onDeleteStore {
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
