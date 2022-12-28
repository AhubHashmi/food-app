import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../styling';
import SMTextField from '../component/SMTextInput';
import database from '@react-native-firebase/database';
import SMButton from '../component/SMButton';

export default function RegisterVehicle() {
    const [model, setModel] = useState({});

    let register = () => {
        console.log(model);
        model.id = database().ref('vehicles/').push().key;
        database().ref(`vehicles/${model.id}`).set(model).then(() => {
            console.log('Success');
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <>
            <View style={[styles.h100, styles.bgLight]}>
                <View style={styles.p2}>
                    <Text style={[styles.fs2, styles.textPrimary]}>Register Vehicle</Text>
                </View>
                <View style={styles.p2}>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, vehicleName: e })} label="Vehicle Name" />
                    </View>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, vehicleType: e })} label="Type Of Vehicle" />
                    </View>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, noOfSeats: e })} label="No. of Seats" />
                    </View>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, time: e })} label="Time" />
                    </View>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, startDest: e })} label="Starting Destination" />
                    </View>
                    <View style={styles.py1}>
                        <SMTextField onChangeText={e => setModel({ ...model, finalDest: e })} label="Final Destination" />
                    </View>
                    <View style={styles.py1}>
                        <SMButton onPress={register} label="Register" />
                    </View>
                </View>
            </View>
        </>
    );
}