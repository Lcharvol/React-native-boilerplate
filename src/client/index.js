import React from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';
import { createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import { BACKGROUND_COLOR } from './constants/colors';
import { WIN_HEIGHT } from './constants/dimensions';

const AppContainer = styled(KeyboardAvoidingView)`
    flex:1;
`;

const RootStack = createStackNavigator(
    {
        Home: Home,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                display:'none',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
    }    
);

  
const App = () => (
    <AppContainer behavior="height" enabled>
        <RootStack />
    </AppContainer>
);

export default App;
  