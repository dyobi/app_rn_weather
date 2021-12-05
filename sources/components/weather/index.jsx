import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import weatherCases from '../weatherCase';
import styles from './styles';

const Component = (props) => {
    return (
        <LinearGradient
            colors={weatherCases[props.name].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons name={weatherCases[props.name].icon} color={'white'} size={144} />
                <Text style={styles.temp}>{Math.ceil(props.temp - 273.15)}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[props.name].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[props.name].subTitle}</Text>
            </View>

        </LinearGradient>
    );
};

export default Component;