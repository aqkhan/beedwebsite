import React, {useState, useEffect} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { client } from './client';


const WrapRootElement = ({children}) => {
    let userToken = localStorage && localStorage.getItem("token");
    const client = new ApolloClient({
        uri: 'https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql',
        request: operation => {
            operation.setContext({
                headers: {
                    authorization: userToken, //Your Auth token extraction logic
                },
            });
        },
    });
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default WrapRootElement;
