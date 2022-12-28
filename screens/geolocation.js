// import GetLocation from 'react-native-get-location'
import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import styles from '../styling';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export default function GeoLocation() {
    // GetLocation.getCurrentPosition({
    //     enableHighAccuracy: true,
    //     timeout: 15000,
    // })
    //     .then(location => {
    //         console.log(location);
    //     })
    //     .catch(error => {
    //         const { code, message } = error;
    //         console.warn(code, message);
    //     })
    const [location, setLocation] = useState('');
    const getgeolocation = () => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords
            setLocation(crd)
            console.log(crd)
        })
    }

    useEffect(() => {
        getgeolocation()
    })

    return (
        <View style={[styles.h100]}>
            <View style={[styles.p2, styles.m2, styles.rounded, styles.border1, styles.bgWhite]}>
                <Text>GOOGLE MAPS LIVE GEOLOCATION</Text>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                    height: 500,
                    width: "100%"
                }}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: location.latitude,
                    longitudeDelta: location.longitude,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                >
                    <Callout tooltip>
                        <View style={[styles.bgWhite, styles.p2, styles.rounded, styles.border1,]}>

                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    )
}