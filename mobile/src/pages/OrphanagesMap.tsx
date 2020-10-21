import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import  MapView, { Marker, Callout,  PROVIDER_GOOGLE }  from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails(){
        navigation.navigate('OrphanageDetails');
    }

    return (
    <View style={styles.container}>
        <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
            latitude: -3.4350431,
            longitude: -39.150464,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
        }}>
            <Marker
            icon={mapMarker}
            coordinate={{
                latitude: -3.4350431,
                longitude: -39.150464,
            }}
            calloutAnchor={{
                x: 2.3,
                y: 0.7,
            }}
            >
            <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Vila do chaves</Text>
                </View>
            </Callout>
            </Marker>
        </MapView>

        <View style={styles.footer}>
            <Text style={styles.footerText}>2 orfanatos encontrados</Text>
            <TouchableOpacity 
                style={styles.createOrphanageBtn} 
                onPress={() => {}}
            >
                <Feather name="plus" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
      
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
  
    footerText: {
      color: '#8fa7b3',
      width: 200,
      fontFamily: 'Nunito_700Bold',
      
    },
  
    createOrphanageBtn: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  