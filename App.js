import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Cotacao from './src/screens/Cotacao';
import Site from './src/screens/Site';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'rgb(242, 211, 5)',
      tabBarInactiveTintColor : 'gray',
      tabBarHideOnKeyboard: true,
      headerTitle: '',
      headerStyle:{
        backgroundColor: 'rgb(90, 9, 9)'
      },
      tabBarStyle:{
        backgroundColor: 'rgb(90, 9, 9)'
      }
    }}>
        <Tab.Screen 
          name="Cotação" 
          component={Cotacao} 
          options={{
            tabBarIcon: ({color, size}) => <Feather name='bar-chart' size={size} color={color} />
          }}
          />
        <Tab.Screen 
          name="Site" 
          component={Site} 
          options={{
            tabBarIcon: ({color, size}) => <Feather name='layout' size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}