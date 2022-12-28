import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styling';
import database from '@react-native-firebase/database';
import GeoLocation from './geolocation';

export default function Booking({ navigation }) {
    const [list, setList] = useState([]);
    let getVehiclesData = () => {
        database().ref('vehicles').once('value', dt => {
            let li = Object.values(dt.val());
            setList([...li]);
        });
    };

    useEffect(() => {
        getVehiclesData();
    }, []);

    return (
        <View style={[styles.p2, styles.bgLight]}>
            {list.map((e, i) => (<TouchableOpacity onPress={() => {
                navigation.navigate('Vehicle', e)
            }}
                style={[
                    styles.p2,
                    styles.my1,
                    styles.rounded,
                    styles.bgWhite,
                    styles.shadow1,
                ]} key={i}>
                <Text style={[styles.fs3, styles.textBold, styles.px2, styles.m1]}>Registered Vehicles ;</Text>
                <Text style={[styles.fs3, styles.textPrimary]}>Name : {e.vehicleName}</Text>
                <Text style={[styles.fs3, styles.textPrimary]}>Seats : {e.noOfSeats}</Text>
                <Text style={[styles.fs3, styles.textPrimary]}>Type : {e.vehicleType}</Text>
            </TouchableOpacity>))}
            <GeoLocation />
        </View>
    );
}