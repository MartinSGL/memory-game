import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/homeTheme'

interface Props extends StackScreenProps<any, any>{}

const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Welcome to Memory game, a game that test your memory range.Please select the level you want to play. If is the first time playing this game, we hihgly recomend you to start by easy level.
            </Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={{
            ...styles.button,backgroundColor:'green'
            }}
            onPress={()=>navigation.navigate('easy') }
            >
                <Text style={styles.buttonText}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                ...styles.button,backgroundColor:'orange'
            }}
            onPress={()=>navigation.navigate('medium') }
            >
                <Text style={styles.buttonText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                ...styles.button,backgroundColor:'red'
            }}
            onPress={()=>navigation.navigate('hard') }
            >
                <Text style={styles.buttonText}>Hard</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen