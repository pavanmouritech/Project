import { StyleSheet } from "react-native";
import NUMERIC from '../../utilities/numeric';
import { Categories,COLORS } from "../../utilities/colors";
import {FONTWEIGHT,PERCENT} from '../../utilities/weightpercent';
import Layouts from '../../utilities/layouts';
import androidFonts from '../../utilities/fonts';


const styles = StyleSheet.create({
    container:{
        flex:NUMERIC.n1,    
    },
    logo:{
        alignSelf:Layouts.centered.alignItems,
        marginTop:NUMERIC.n30,
    },
    loginLogo:{
        marginTop:NUMERIC.n10,
    },
    text:{
        fontSize:NUMERIC.n25,
        fontFamily:androidFonts.arialRegular,
        fontWeight:FONTWEIGHT.f100,
        color:Categories.other.gray,
        marginTop:NUMERIC.n25,
        textAlign:Layouts.centered.alignItems,
    },
    textView:{
        height:NUMERIC.n50,
        width:NUMERIC.n150,
        justifyContent:Layouts.centered.justifyContent,
        alignItems:Layouts.centered.alignItems,
        backgroundColor:COLORS.primary,
        borderRadius:NUMERIC.n25,
        flexDirection:Layouts.centerHorizontal.flexDirection,
        alignSelf:Layouts.centered.alignItems,
        marginTop:NUMERIC.n50,
    },
    login:{
        fontSize:NUMERIC.n18,
        color:COLORS.white,
        fontWeight:FONTWEIGHT.fbold,
        fontFamily:androidFonts.arialRegular,
    },
    greaterthan:{
        top:NUMERIC.n1,
        left:NUMERIC.n10,
        color:COLORS.white,
    },
    footer:{
        backgroundColor:Categories.other.primarySkyBlue,
        position:Layouts.over.position,
        bottom:Layouts.over.bottom,
        width:PERCENT.p100,
        alignItems:Layouts.centered.alignItems,
        justifyContent:Layouts.centered.justifyContent,
        padding:NUMERIC.n15,
    },
    footerText1:{
        color:COLORS.white,
        marginTop:NUMERIC.n10,
        fontSize:NUMERIC.n13,
        fontFamily:androidFonts.arialRegular,
    },
    footerText2:{
        color:COLORS.white,
        marginVertical:NUMERIC.n15,
        fontSize:NUMERIC.n13,
        fontFamily:androidFonts.arialRegular,
    },
});

export default styles;