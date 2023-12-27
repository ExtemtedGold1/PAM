import React, {useState,} from "react";
import {Text, TouchableOpacity, View} from 'react-native';

export const ThemeSwitcher = () =>{
    const [ theme, setTheme ] = useState('dark');

    const handleSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <View>
            <TouchableOpacity onPress={handleSwitch}>
                <Text>Change Theme Colorr</Text>
            </TouchableOpacity>
        </View>
    )
};
