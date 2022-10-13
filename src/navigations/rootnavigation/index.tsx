import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from '../drawer';


const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <RootDrawer />
        </NavigationContainer>
    );
};


export default RootNavigation;