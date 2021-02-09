import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        backgroundColor: '#F0EEEE'
    }
})
