import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styling';
import { useState } from 'react';
import SMButton from '../component/SMButton';

export default function Vehicle({ navigation, route }) {
    const [reviewList, setReviewList] = useState([
        {
            name: 'Ahad',
            feedback: 'good',
        },
        {
            name: 'Basit',
            feedback: 'better',
        },
        {
            name: 'Abid',
            feedback: 'best',
        },
        {
            name: 'Farig',
            feedback: 'v.good',
        },
    ]);
    let obj = route.params;
    return (
        <>
            <View style={[styles.h100, styles.bgLight]}>
                <View style={styles.p2}>
                    <Text style={[styles.fs1, styles.textPrimary]}>{obj.vehicleName}</Text>
                    <Text style={[styles.fs1, styles.textPrimary]}>Seats : {obj.noOfSeats}</Text>
                    <Text style={[styles.fs1, styles.textPrimary]}>Starting Destination : {obj.startDest}</Text>
                    <Text style={[styles.fs1, styles.textPrimary]}>Final Destination : {obj.finalDest}</Text>
                </View>
                <ScrollView>
                    <View style={[styles.p2, styles.bgWhite, styles.rounded, styles.m2]}>
                        <Text style={[styles.fs5, styles.textPrimary]}>Reviews</Text>
                        {reviewList.map((x, i) => (
                            <View key={i} style={[styles.bgLight, styles.my1, styles.p1, styles.rounded]}>
                                <Text style={[styles.fs4, styles.mb1, styles.textPrimary]}>{x.name}</Text>
                                <Text>{x.feedback}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.p2}>
                    <SMButton onPress={() => navigation.navigate('AddBooking', obj)} label="Book Now" />
                </View>
            </View>
        </>
    )
}