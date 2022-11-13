import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/HomeScreen';
import SavedArticlesScreen from './screens/SavedArticles';

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedArticlesScreen} />
    </Tab.Navigator>
  );
}


function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}


export default AppNavigation;
