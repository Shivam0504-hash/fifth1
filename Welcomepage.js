import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const leftarrow = require('./assets/left.png');
const eyeicon = require('./assets/eyeicon.png');
const eyeclose =require('./assets/eyeoff.png');


const initialCredentials = [
    { email: 'shivamsingh123@gmail.com', password: 'Shiv@1234' },
    
];

const Welcomepage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = () => {
        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert('Invalid Password', 'Password must be at least 8 characters long, include one uppercase letter and one special character.');
            return;
        }

        const found = initialCredentials.some(
            (cred) => cred.email === email && cred.password === password
        );

        if (found) {
            Alert.alert('Success', 'You have successfully logged in!');
        } else {
            Alert.alert('Error', 'Email or password is incorrect.');
        }
    };

    const handleEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
            <View style={styles.container}>
                <Image source={leftarrow} style={styles.leftimage} />
            </View>
            <View style={styles.welcomecontainer}>
                <Text style={styles.welcometext}>Welcome Back</Text>
            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.subtext}>Continue with your valid credentials</Text>
            </View>
            <TextInput
                style={styles.email}
                placeholder='Email Address'
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.passwordcontainer}>
                <TextInput
                    style={styles.passwordinput}
                    placeholder='Password'
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleEyePress}>
                    <Image
                        source={isPasswordVisible ? eyeclose : eyeicon}
                        style={styles.eye}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.forgottext}>Forgot Password?</Text>
            <TouchableOpacity onPress={handleLogin}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>Login</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.bottom}>
                <Text style={styles.bottomtext1}>Already have an account?</Text>
                <Text style={styles.bottomtext2}>Sign in </Text>
                <Text style={styles.bottomtext1}> now</Text>
            </View>
        </>
    );
};

export default Welcomepage;

const styles = StyleSheet.create({
    container: {
        height: 136,
        width: 393,
        backgroundColor: '#FFFFFF',
    },
    leftimage: {
        width: 18,
        height: 16,
        marginLeft: 20,
        marginBottom: 25,
        marginTop: 95,
    },
    welcomecontainer: {
        width: 185,
        height: 31,
        marginTop: 35,
        marginLeft: 32,
    },
    welcometext: {
        fontFamily: 'Montserrat',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 31.2,
        color: '#0000000',
    },
    subcontainer: {
        height: 18,
        width: 248,
        marginTop: 6,
        marginLeft: 32,
    },
    subtext: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18.2,
        color: '#4F5F72',
    },
    email: {
        width: 329,
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C8CFD6',
        marginLeft: 32,
        marginTop: 24,
        padding: 17,
    },
    passwordcontainer: {
        width: 329,
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C8CFD6',
        marginLeft: 32,
        marginTop: 28,
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordinput: {
        width: 288,
        height: 55,
        padding: 17,
    },
    eye: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 17,
    },
    forgottext: {
        width: 126,
        height: 14,
        marginTop: 28,
        marginLeft: 235,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'center',
    },
    button: {
        width: 329,
        height: 56,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#19213D',
        marginTop: 20,
        marginLeft: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20.8,
        letterSpacing: '-2%',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    bottom: {
        width: 300,
        height: 20,
        marginTop: 28,
        marginLeft: 46,
        flexDirection: 'row',
    },
    bottomtext1: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.5,
        textAlign: 'center',
        color: '#000000',
    },
    bottomtext2: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19.5,
        textAlign: 'center',
        color: '#000000',
        textDecorationLine: 'underline',
    },
});

