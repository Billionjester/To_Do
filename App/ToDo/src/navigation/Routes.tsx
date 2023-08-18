import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.mocki.io/v2/c4d7a195/graphql',
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default function Routes() {
  const { userData } = useSelector((state: any) => state?.auth || {});

  console.log(userData, '<===userData');

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {MainStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
