import React, {useState, useEffect} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const WrapRootElement = ({children}) => {

    const client = new ApolloClient({
        uri: 'https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql',
        request: operation => {
            operation.setContext({
                headers: {
                    authorization: localStorage ? localStorage.getItem("token") : "",
                    fetch
                },
            });
        },
    });
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default WrapRootElement;
