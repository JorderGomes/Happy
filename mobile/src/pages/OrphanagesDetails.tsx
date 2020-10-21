import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function OrphanageDetails(){
    return (
        <View style={styles.container}>
            <Text style={styles.paragrafo}>Detalhes de orphanato</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    paragrafo: {
        width: 200,
        textAlign: 'center'
    }
});