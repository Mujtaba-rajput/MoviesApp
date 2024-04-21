import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      {/* add your another screen here using -> Stack.Screen */}
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeBase"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeBase"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="MovieDetails"
          options={{headerShown: false}}
          component={MovieDetails}
        />
        <Stack.Screen
          name="AuthBase"
          options={{headerShown: false}}
          component={Auth}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
