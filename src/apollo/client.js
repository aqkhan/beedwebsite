import ApolloClient from 'apollo-boost';
// let userToken = typeof window !== 'undefined' &&  localStorage.getItem("token");
export const client = new ApolloClient({

    uri: 'https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql',
    request: operation => {
        operation.setContext({
            headers: {
                authorization: localStorage.getItem("token"), //Your Auth token extraction logic
            },
        });
    },
});