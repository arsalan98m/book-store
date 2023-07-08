// Libraries/Packages
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {HomeScreen, BookScreen} from '../screens';

// Utilities
import RoutePaths from '../utils/route_paths';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={RoutePaths.HOME}>
        <Stack.Screen name={RoutePaths.HOME} component={HomeScreen} />
        <Stack.Screen name={RoutePaths.BOOK} component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
