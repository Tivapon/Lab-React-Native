import React, { useState,useEffect } from "react";
import { ImageBackground, Text ,StyleSheet} from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
                    .then((response) => response.json())
                    .then((json) => {
                        setForecastInfo({
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
    }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: '_',
        description: '_',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <Text style={styles.title}>Zip Code is {props.zipCode} </Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles  = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    title: {
        fontSize: 30,
        padding: '5%',
        color: 'white',
        backgroundColor: 'black'
    }
})