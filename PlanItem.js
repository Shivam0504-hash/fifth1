import React from 'react';
import {View,TouchableOpacity,Image, StyleSheet,Text} from 'react-native';
const planimage=require('./assets/planimage.png');
const PlanItem=({plan})=>
{
    return(
        
    <View style={styles.plancontainer}>
        <View style={styles.row} >
        <View style={styles.column}>
            <Text style={styles.planname}>{plan.name}</Text>
            
            <Text style={styles.plansub}>•  {plan.features[0]}</Text>
            <Text style={styles.plansub}>•  {plan.features[1]}</Text>
            <Text style={styles.plansub}>•  {plan.features[2]}</Text>

        </View>
        <Image source={planimage} style={styles.planimg}/>


        </View>
        <View style={styles.horizontal}/>
        <View style={styles.row} >
        <Text style={styles.prise}>{plan.price}</Text>
        <View style={styles.button}>
            <Text numberOfLines={1} style={styles.buttontext}>{plan.button}</Text>
        </View>
        </View>
    </View>
    
    )
    
}
export default PlanItem;
const styles=StyleSheet.create({
    plancontainer:
    {
        height:196,
        width:353,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#fff',
        marginTop:16,
        marginLeft:24,
        marginBottom:10,
    },
    row:{
        flexDirection:'row',
    },
    planname:
    {
        width:130,
        height:17,
        fontFamily:'Montserrat',
        fontWeight:'700',
        fontSize:'14',
        lineHeight:17.07,
        marginTop:23,
        marginLeft:19,
        marginBottom:8,
    },
    plansub:
    {
        fontFamily:'Montserrat',
        fontWeight:'500',
        fontSize:12,
        lineHeight:23,
        letterSpacing:'-0.5x',
        marginLeft:19,
        color:'#585858',
        


    },
    column:
    {
        flexDirection:'column',

    },
    planimg:
    {
        height:96,
        width:96,
        borderRadius:8.12,
        resizeMode:'contain',
        marginTop:20,
        marginLeft:84,

    },
    horizontal:
    {
        width:313,
        height:1,
        backgroundColor:'#D9D9D9',
        marginTop:15,
        marginLeft:20,
    },
    prise:
    {
        width:50,
        height:20,
        fontFamily:'Montserrat',
        fontWeight:'600',
        fontSize:'14',
        lineHeight:19.49,
        letterSpacing:'-0.41',
        marginTop:16,
        marginLeft:19,
    },
    button:
    {
        width:89,
        height:33,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:178,
    },
    buttontext:
    {
        width:64,
        height:24,
        fontFamily:'Montserrat',
        fontWeight:'600',
        fontSize:15,
        lineHeight:24,
        letterSpacing:-0.5,
        alignContent:'center',
        marginTop:5,
        marginLeft:13,
    },

})