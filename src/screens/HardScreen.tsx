import React from 'react'
import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { hardData, Images, mediumData } from '../storage/storage';
import Card from '../components/Card';
import WinLoseCard from '../components/WinLoseCard';
import useMemory from '../hooks/useMemory';
import { styles } from '../theme/levelTheme';

const HardScreen = () => {

  const win = Dimensions.get('window');
  const withImg = (win.width-60)/4
  const heigthImg = withImg*0.7

  const {data,visible,guess,reset} = useMemory(hardData,5000)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
            Memorize all pairs of images, you have 3 attempts
        </Text>
        <Text style={styles.headerTextRight}>
          ❤️:{data.lifes}   ✅:{data.hits}
        </Text>
      </View>
      <View style={styles.hr}/>
        {
          data.lifes===0 || data.hits===9
          ?
           data.hits===9
            ? <WinLoseCard text={'You have won the game'} icon={'smile-beam'} reset={reset}/>
            : <WinLoseCard text={'You have lost the game'} icon={'sad-tear'} reset={reset}/>
          :
          <View style={styles.bodyContainer}>
          {
            data.images.map((item:Images,index:number)=>  
               (
                  <Card 
                    key={index.toString()}
                    data={data}
                    el={item}
                    index = {index}
                    visible = {visible}
                    withImg = {withImg}
                    heigthImg = {heigthImg}
                    guess = {guess}
                  />
                )
              )
          }
          </View>
        }
    </View>
  )
}

export default HardScreen