import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/SearchScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          component={SearchScreen}
          name="Search"
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}