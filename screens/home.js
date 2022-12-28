import database from '@react-native-firebase/database';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SMButton from '../component/SMButton';
import styles from '../styling';

function Home({ navigation }) {

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

  let registerVehicle = () => {
    navigation.navigate('RegisterVehicle');
  };
  return (
    <>
      <View style={[styles.bgLight, styles.h100]}>
        <View style={styles.p2}>
          <Text style={[styles.fs3, styles.textPrimary]}>Home</Text>
        </View>
        <View style={styles.p2}>
          <SMButton onPress={registerVehicle} label="Register Vehicle" />
        </View>
        <View style={styles.p2}>
          <SMButton onPress={() => navigation.navigate('Booking')} label="Bookings & live geolocation" />
        </View>
        <View style={styles.p2}>
          <SMButton onPress={() => navigation.navigate('AddBooking')} label="Book a Vehicle" />
        </View>
        <View style={styles.p2}>
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
        </View>
      </View>
    </>
  );
}
export default Home;
