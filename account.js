import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
const left = require('./assets/left.png');
const eyeicon = require('./assets/eyeicon.png');
const eyeclose = require('./assets/eyeoff.png');

const Account = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const validateForm = () => {
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!nameRegex.test(firstName)) {
            Alert.alert('Error', 'First name should only contain letters.');
            return false;
        }

        if (!nameRegex.test(lastName)) {
            Alert.alert('Error', 'Last name should only contain letters.');
            return false;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email.');
            return false;
        }

        if (!phoneRegex.test(phoneNumber)) {
            Alert.alert('Error', 'Phone number must be exactly 10 digits.');
            return false;
        }

        if (!passwordRegex.test(password)) {
            Alert.alert('Error', 'Password must be at least 8 characters long, contain at least one uppercase letter and one special character.');
            return false;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Confirm password does not match.');
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            Alert.alert('Success', 'Account setup is complete.');
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={left} style={styles.left} />
            </View>
            <Text style={styles.heading}>Create an Account</Text>
            <Text style={styles.subheading}>Enter in your credentials</Text>
            <TextInput 
                style={styles.input} 
                placeholder='First Name' 
                value={firstName} 
                onChangeText={setFirstName} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Last Name' 
                value={lastName} 
                onChangeText={setLastName} 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Email' 
                value={email} 
                onChangeText={setEmail} 
                keyboardType='email-address' 
            />
            <TextInput 
                style={styles.input} 
                placeholder='Phone Number (Optional)' 
                value={phoneNumber} 
                onChangeText={setPhoneNumber} 
                keyboardType='numeric' 
            />
            <View style={styles.passwordcontainer}>
                <TextInput 
                    style={styles.passwordinput} 
                    placeholder='Password' 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry={!isPasswordVisible} 
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image 
                        source={isPasswordVisible ? eyeclose : eyeicon} 
                        style={styles.eye}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.passwordcontainer}>
                <TextInput 
                    style={styles.passwordinput} 
                    placeholder='Confirm Password' 
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                    secureTextEntry={!isConfirmPasswordVisible} 
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    <Image 
                        source={isConfirmPasswordVisible ? eyeclose : eyeicon} 
                        style={styles.eye}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>Setup Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 136,
        weight: 393,
        backgroundColor: '#FFFFFF',
    },
    left: {
        width: 18,
        height: 16,
        resizeMode: 'contain',
        marginTop: 95,
        marginLeft: 20,
        marginBottom: 25,
    },
    heading: {
        width: 226,
        height: 31,
        fontFamily: 'Montserrat',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 31.2,
        letterSpacing: '-3%',
        color: '#000000',
        marginTop: 35,
        marginLeft: 32,
    },
    subheading: {
        width: 168,
        height: 18,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18.2,
        letterSpacing: '-1%',
        color: '#4F5F72',
        marginTop: 6,
        marginLeft: 32,
    },
    passwordcontainer: {
        width: 329,
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C8CFD6',
        marginLeft: 32,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordinput: {
        width: 291,
        height: 55,
        padding: 17,
    },
    eye: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 17,
    },
    input: {
        width: 329,
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C8CFD6',
        marginLeft: 32,
        marginTop: 24,
        padding: 17,
    },
    button: {
        width: 329,
        height: 56,
        backgroundColor: '#d2d4d2',
        marginLeft: 32,
        marginTop: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        width: 121,
        height: 21,
        color: '#fff',
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20.8,
        letterSpacing: '-2%',
        textAlign: 'center',
    },
});

