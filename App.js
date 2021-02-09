import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/SearchScreen'

export default function App() {
  reutrn (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={SearchScreen}
          name="Search"
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}