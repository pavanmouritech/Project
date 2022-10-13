import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';


const Dashboard = () =>{
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Welcome DashBoard</Text>
            </View>
        );
};

export default Dashboard;