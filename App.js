import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { commerce } from './src/lib/commerce';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen/Home';



const Stack = createNativeStackNavigator();

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log(data)
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();

  }, [])

  createHomeStack = () => {
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  }




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App