import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background} >
            <Text>Search Bar</Text>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#C3C3C8',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})
