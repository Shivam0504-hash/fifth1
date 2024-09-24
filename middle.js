import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const containerimg = require('./assets/containerimg.png');
const containerimg2 = require('./assets/containerimg2.png');
const crown = require('./assets/crowns.png');

const Middle = () => {
    return (
        <>

            <View style={styles.container}>
                <Image source={containerimg} style={styles.img} />
            </View>

            <View style={styles.img2container2}>
                <Image source={containerimg2} style={styles.img2} />
                <View>
                    <Text style={styles.uppertext}>Balance lookup</Text>
                    <Text style={styles.bottomtext}>Use Balance Lookup to lookup the balance </Text>
                    <Text style={styles.bottomtext}>of a Club Plan, Wash Book, or Gift Card </Text>
                </View>

            </View>
            <View style={styles.packageouter}>
                <View style={styles.inner}>
                    <Image source={crown} style={styles.crown} />
                    <View style={styles.columncontainer}>
                        <Text style={styles.packageheader}>You have</Text>
                        <Text style={styles.packagesubheader}>Package Name</Text>
                    </View>
                    <Text style={styles.detailtext}>Details</Text>


                </View>
                <View style={styles.rowcontainer}>
                    <View style={styles.explorecontainer}>
                        <Text style={styles.exploretext}>Explore Lounge Benefits</Text>
                    </View>
                    <View style={styles.explorecontainer2}>
                        <Text style={styles.exploretext}>Explore Lounge </Text>
                    </View>
                </View>

            </View>










        </>

    )
}

export default Middle;
const styles = StyleSheet.create({
    container:
    {
        height: 200,
        width: '100%',
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    img: {
        width: 105.2,
        height: 105.2,
        resizeMode: 'contain',
    },
    img2container2:
    {
        height: 89,
        width: 355,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: '#486284',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,

    },
    img2: {
        height: 56.45,
        width: 56.47,
        margin: 14.25,
    },
    uppertext:
    {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 12.75,
        color: '#FFFFFF',
        marginBottom: 10,

    },
    bottomtext:
    {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15.6,
        color: '#FFFFFF',
    },
    container2:
    {
        flexDirection: 'row',
    },
    packageouter:
    {
        height: 142,
        width: 348,
        marginLeft: 24,
        marginTop: 23,
        marginBottom:10,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        paddingLeft: 21,
        paddingTop: 25.11,
    },
    inner: {
        height: 44,
        width: 44,
        flexDirection: 'row',
    },
    crown:
    {
        height: 44,
        width: 44,


    },
    columncontainer: {
        flexDirection: 'column',
        marginLeft: 12,

    },
    packageheader:
    {
        width: 59,
        height: 13,
        fontFamily: "Montserrat",
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 13.41,
        letterSpacing: '-1%',
        marginTop: 4.89,
        marginBottom: 1,
    },
    packagesubheader:
    {
        width: 125,
        height: 20,
        fontFamily: "Montserrat",
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19.5,
        letterSpacing: '-1%',

    },
    detailtext:
    {
        width: 43,
        height: 19,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 19,
        letterSpacing: '-1%',
        marginTop: 11.89,
        marginLeft: 82,
    },
    rowcontainer:
    {
        flexDirection: 'row',
    },
    explorecontainer:
    {
        height: 35,
        width: 175,
        borderRadius: 30,
        backgroundColor: '#d9d9d9',
        marginTop: 22,
        marginLeft: 21,
        paddingTop: 10,
        paddingLeft: 15,

    },
    exploretext: {
        width: 145,
        height: 15,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: '-2%',
        alignContent: 'center',


    },
    explorecontainer2:
    {
        height: 35,
        width: 110,
        borderRadius: 30,
        backgroundColor: '#d9d9d9',
        marginTop: 22,
        marginLeft: 21,
        paddingTop: 10,
        paddingLeft: 15,

    },
    
    




})