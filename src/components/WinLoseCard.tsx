import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface WinLoseCardProps {
  text:string
  icon:string
  reset:()=>void
}

const WinLoseCard = ({text,icon,reset}:WinLoseCardProps) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',top:-50}}>
      <Icon name={icon} color={'black'} size={100}/>
      <Text style={{fontSize:25,marginTop:40}}>
        {text}
      </Text>
      <TouchableOpacity 
        onPress={reset}
        style={{
          paddingHorizontal:30,
          paddingVertical:10,
          backgroundColor:'green',
          borderRadius:10,
          marginTop:10,
          }}>
        <Text style={{color:'white'}}>
          Try again
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default WinLoseCard