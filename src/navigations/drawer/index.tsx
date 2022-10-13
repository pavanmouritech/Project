import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../screens/dashboard';
import Home from '../../screens/home';


const Drawer = createDrawerNavigator();

const RootDrawer = () =>{
    return(
        <Drawer.Navigator initialRouteName='dashboard'>
            <Drawer.Screen name='Dashboard' component={Dashboard}/>
            <Drawer.Screen name='Home' component={Home}/>
        </Drawer.Navigator>
    );
};

export default RootDrawer;