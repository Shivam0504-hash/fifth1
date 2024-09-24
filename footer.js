import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const Home=require('./assets/home.png');
const Shop=require('./assets/shop.png');
const Settings=require('./assets/settings.png');
const Schedule=require('./assets/schedule.png');


const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemcontainer}>
                <View style={styles.column}>
                <Image source={Home} style={styles.img}/>
                <Text style={styles.footertext}>HOME</Text>
                </View>
                <View style={styles.column}>
                <Image source={Shop} style={styles.img}/>
                <Text style={styles.footertext1}>SHOP</Text>
                </View>
                <View style={styles.column}>
                <Image source={Schedule} style={styles.img}/>
                <Text style={styles.footertext1}>SCHEDULE</Text>
                </View>
                <View style={styles.column}>
                <Image source={Settings} style={styles.img}/>
                <Text style={styles.footertext1}>ACCOUNT</Text>
                </View>
        
            </View>
        </View>
    )
}

export default Footer;
const styles = StyleSheet.create({
    container:
    {
        height:94,
        width:393,
        marginTop:50,
    },
    itemcontainer:
    {
        marginTop:16,
        justifyContent:'space-evenly',
        flexDirection:'row',
    },
    column:
    {
        flexDirection:'column',
    },
    img:{
        width:22,
        height:22,
        marginLeft:5,
    },
    footertext:
    {
        width:31,
        height:16,
        marginTop:11,
        fontFamily:'Montserrat',
        fontWeight:'600',
        fontSize:10,
        lineHeight:16,
        color:'#000000',
        marginLeft:3,
    },
    footertext1:
    {
        width:58,
        height:47,
        marginTop:11,
        fontFamily:'Montserrat',
        fontWeight:'600',
        fontSize:10,
        lineHeight:16,
        color:'#8A91A5',
        
    }
})