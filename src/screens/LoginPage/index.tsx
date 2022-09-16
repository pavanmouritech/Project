import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Iconsvg, xml } from '../../assets/svgIcons';
import styles from './styles';
import Strings from '../../utilities/strings';
import NUMERIC from '../../utilities/numeric';

const Login = () =>{
    return(
        <View style={styles.container}>
                <Iconsvg 
                    xml={xml.logo}
                    style={styles.logo}
                    height={NUMERIC.n70}
                    width={NUMERIC.n200}
                />
                <Iconsvg 
                    xml={xml.login.loginLogo}
                    style={styles.loginLogo}
                    height={NUMERIC.n260}
                /> 
            <Text style={styles.text}>{Strings.welcometomyaccount}</Text>        
            <TouchableOpacity style={styles.textView}>
                    <Text style={styles.login}>{Strings.login}</Text>
                    <Iconsvg 
                        xml={xml.greaterthan}
                        style={styles.greaterthan}
                        height={NUMERIC.n20}
                        width={NUMERIC.n10}
                    />
            </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footerText1}>©2022 Alaska Communications. All rights reserved</Text>
                    <Text style={styles.footerText2}>Privacy  |  Acceptable Use Policy  |  Terms and Conditions</Text>
                </View>  
        </View>
    );
};

export default Login;