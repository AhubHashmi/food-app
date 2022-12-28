import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import styles from '../styling'
import SMTextField from '../component/SMTextInput'
import SMButton from '../component/SMButton'
import { useState } from 'react'
import database from '@react-native-firebase/database'

export default function AddBooking({ navigation, route }) {
    let vehicleObj = route.params;
    const [model, setModel] = useState({});
    let bookNow = () => {
        model.vehicleDetails = vehicleObj;
        model.id = database().ref('bookings/').push().key;
        database().ref('bookings/').set(model).then(() => {
            ToastAndroid.show('Booking Created Successfully', ToastAndroid.SHORT);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <View style={[styles.h100, styles.bgLight]}>
                <View style={[styles.p2, { flex: 1 }]}>
                    <Text style={[styles.textPrimary, styles.fs3]}>Create Vehicle Booking</Text>
                </View>
                <View style={[styles.p2, { flex: 6 }]}>
                    <ScrollView>
                        {/* <View
                            style={[
                                styles.bgWhite,
                                styles.rounded,
                                styles.shadow1,
                                styles.p1,
                            ]}>
                            <Text style={[styles.textPrimary, styles.fs4]}>Vehicle Details</Text>
                        </View>
                        <View style={styles.py1}>
                            <SMTextField disabled={true} value={vehicleObj.vehicleName} label="Vehicle Name" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField disabled={true} value={vehicleObj.vehicleType} label="Vehicle Type" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField disabled={true} value={vehicleObj.noOfSeats} label="No. Of Seats" />
                        </View> */}
                        <View
                            style={[
                                styles.bgWhite,
                                styles.rounded,
                                styles.shadow1,
                                styles.p1,
                                styles.mb2,
                            ]}>
                            <Text style={[styles.textPrimary, styles.fs4]}>Personal Details</Text>
                        </View>
                        <View style={styles.py1}>
                            <SMTextField onChangeText={e => setModel({ ...model, userName: e })} label="User Name" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField keyboardType="Numeric" onChangeText={e => setModel({ ...model, contact: e })} label="Contact" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField keyboardType="Numeric" onChangeText={e => setModel({ ...model, cnic: e })} label="CNIC" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField onChangeText={e => setModel({ ...model, address: e })} label="Address" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField onChangeText={e => setModel({ ...model, pickUpPoint: e })} label="Pick Up Point" />
                        </View>
                        <View style={styles.py1}>
                            <SMTextField onChangeText={e => setModel({ ...model, dropPoint: e })} label="Drop Point" />
                        </View>
                    </ScrollView>
                </View>
                <View style={[styles.p2, { flex: 1 }]}>
                    <SMButton onPress={bookNow} label="Book Now" />
                </View>
            </View>
        </>
    )
}