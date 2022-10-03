import {  ImageStore } from "react-native"
import { getShuffledArr } from "../helpers/functions"
import { Data, easyData, Images } from '../storage/storage'

type MemoryAction = 
    {type:'guess',payload:Images} |
    {type:'reset',payload:Data}

export const initMemory = (data:Data) => {
    return {...data,images:getShuffledArr(data.images)}
}

export const memoryReducer = (data:Data,action:MemoryAction) =>{
    switch(action.type){
        case 'guess':
            if(data.trys.length!==0){
                if(data.trys[0].name ===action.payload.name){
                  return {
                    ...data,
                    attemps:(data.attemps+1),
                    hits:data.hits+1,
                    trys:[],
                    guessed:[...data.guessed,...data.trys,action.payload],
                    images:data.images.map((el:Images) => el.id !== action.payload.id ? el : {...el,status:true})
                  }
                }else{
                  return {
                    ...data,
                    attemps:(data.attemps+1),
                    trys:[],
                    lifes:data.lifes-1,
                    images:data.images.map((el:Images) => el.name !== data.trys[0].name  ? el : {...el,status:false})
                  }
                }
              }else{
                return {
                  ...data,
                  attemps:(data.attemps+1),
                  trys:[...data.trys,action.payload],
                  images:data.images.map((el:Images) => el.id !== action.payload.id ? el : {...el,status:true})
                }
              }
        case 'reset':
            return{...action.payload,images:getShuffledArr(action.payload.images)} 
    }
}