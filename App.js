import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Criteria from './screens/Criteria';
import Questions from './screens/Questions';
import QuestionScreen from './screens/QuestionScreen';
import './global';
import TestFlatList from './screens/TestFlatList';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TestFlatList" component={TestFlatList} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Criteria" component={Criteria} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
