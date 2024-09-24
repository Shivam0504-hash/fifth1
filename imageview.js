import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const containerimg2 = require('./assets/containerimg2.png');
const Imageview = () => {
    return (
        <View style={styles.img2container3}>
        <Image source={containerimg2} style={styles.img2} />
        <View>
            <Text style={styles.uppertext3}>Set a Reminder?</Text>
            <Text style={styles.bottomtext3}>Forgot to stop by the wash? Set a</Text>
            <Text style={styles.bottomtext3}>reminder!</Text>
        </View>

    </View>

    )
}

export default Imageview;
const styles = StyleSheet.create({
    img2container3:
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
    uppertext3:
    {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 12.75,
        color: '#FFFFFF',
        marginBottom: 10,

    },
    bottomtext3:
    {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15.6,
        color: '#FFFFFF',
    },
    




})