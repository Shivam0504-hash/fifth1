import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const location = require('./assets/image.png');
const arrow = require('./assets/arrow.png');
const bell = require('./assets/bell.png');
const cart = require('./assets/cart.png');

const Header = () => {
    return (
        <View style={styles.headercontainer}>


            <View style={styles.leftheader}>

                <Image source={location} style={[styles.LocationIcon, { marginTop: 46, marginLeft: 7 }]} />



                <View style={styles.middlestyle}>
                    <Text style={styles.locationtext}>LOCATION</Text>
                    <View style={styles.papawitharrow}>
                        <Text style={styles.papatext}>Papa Bear Anderson</Text>
                        <Image source={arrow} style={styles.downarrow} />
                    </View>
                </View>
            </View>




            <View style={styles.headerright}>


                <Image source={bell} style={styles.bellstyle} />
                <Image source={cart} style={styles.cartstyle} />

            </View>


        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headercontainer: {
        backgroundColor: '#486284',
        width: 393,
        height: 123,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 12
    },
    leftheader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    LocationIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
    middlestyle: {
        flexDirection: 'column',
        marginTop: 46,
        marginLeft: 11
    },
    locationtext: {
        width: 60,
        height: 11,
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 11,
        color: '#ffffff',
        textAlign: 'left',
        marginBottom: 8
    },
    papawitharrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    papatext: {
        width: 162,
        height: 16,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        color: '#ffffff',
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    downarrow: {
        width: 10,
        height: 5,
        resizeMode: 'contain',
    },
    headerright: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bellstyle: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D91A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46,
        marginRight: 11
    },
    cartstyle: {
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D91A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46
    },
})