import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Location from 'expo-location';

import Weather from '../weather';
import styles from './styles';

const API_KEY = '0b9ee6b69acf6a1b2efcd0cd613730e3';

const Component = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState(null);

    const getWeather = (lat, long) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                setTemperature(json.main.temp);
                setName(json.weather[0].main);
                setIsLoaded(true);
            })
    };

    const componentDidMount = () => {
        Location.installWebGeolocationPolyfill();
        window.navigator.geolocation.getCurrentPosition(
            position => {
                getWeather(position.coords.latitude, position.coords.longitude);
            }, error => {
                setError(error);
            }
        );
    };

    componentDidMount();

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {isLoaded ?
                <Weather name={name} temp={temperature} />
                :
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Getting the fucking weather</Text>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
            }
        </View>
    );
};

export default Component;