import React, { useState } from "react";
import { ImageBackground, Text ,StyleSheet} from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
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