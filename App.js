import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComp from './comp/HomeComp';
import LoginComp from './comp/LoginComp';
const StackDemo = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator initialRouteName='LoginComp'>
        <StackDemo.Screen name='LoginComp' component={LoginComp} options={{ title: 'Đăng nhập' }} />
        <StackDemo.Screen name='HomeComp' component={HomeComp} options={{ title: 'Home page' }} />
      </StackDemo.Navigator>
    </NavigationContainer>

  );
}
export default App;