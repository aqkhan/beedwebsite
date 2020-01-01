import React, {useState, useEffect} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

// import { client } from './client';


const WrapRootElement = ({children}) => {
    // const userToken =  typeof localStorage !=="undefined" && localStorage.getItem("token");
    const client = new ApolloClient({
        uri: 'https://vft2h7l6zrbudbynw462k2ndnu.appsync-api.us-east-1.amazonaws.com/graphql',
        request: operation => {
            operation.setContext({
                headers: {
                    authorization: localStorage ? localStorage.getItem("token") : "" , //Your Auth token extraction logic
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
