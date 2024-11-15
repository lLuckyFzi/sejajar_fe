import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';

function OTPInput(props) {
    const { length = 4, onOtpComplete } = props

    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        // Update the OTP array
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input or trigger onOtpComplete
        if (text && index < length - 1) {
            inputs.current[index + 1].focus();
        }

        // If OTP is complete, trigger onOtpComplete callback
        if (newOtp.join('').length === length) {
            onOtpComplete && onOtpComplete(newOtp.join(''));
        }
    };

    // Handle backspace to go to the previous input
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array(length).fill(0).map((_, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 12,
        backgroundColor: 'white',
    },
});

export default OTPInput