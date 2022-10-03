import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { EasyData, Images } from '../storage/storage'

interface CardProps {
    data:EasyData,
    el:Images,
    index:number,
    visible:boolean,
    withImg:number,
    heigthImg:number,
    guess:(el:Images)=>void
}

const Card = ({
    data,
    el,
    index,
    visible,
    withImg,
    heigthImg,
    guess
}:CardProps
    
) => {
  return (
    <TouchableOpacity 
        style={{borderWidth:1,borderColor:'black',margin:10}}
        onPress={()=> el.status === false && guess(el)}
    >
        <Image 
            style={
            el.status === false && !visible
            ? {width:withImg,height:heigthImg, opacity:0}
            : {width:withImg,height:heigthImg, opacity:1}
            } 
            source={{uri:data.images[index].url}}
        />
    </TouchableOpacity>
  )
}

export default Card