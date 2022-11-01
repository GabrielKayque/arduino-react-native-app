import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela de Pareamento</Text>
            <Button
                title="Go to InfoScreen"
                onPress={() => navigation.navigate('Info')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})