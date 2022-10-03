import React, { useEffect, useReducer, useState } from 'react'
import { Data, Images, easyData } from '../storage/storage';
import { initMemory, memoryReducer } from '../reducers/memoryReducer';

const useMemory = (dataLevel:Data,time:number) => {
    const [visible,setVisible] = useState(true)
    const [data, dispatch] = useReducer(memoryReducer, dataLevel, initMemory)
  
    useEffect(()=>{
        setTimeout(() => {
          setVisible(false)
        }, time)
      },[])
  
    const guess = (item:Images) =>{
      dispatch({type:'guess',payload:item})
    }
  
    const reset = () => {
        setVisible(true)
        dispatch({type:'reset',payload:easyData})
        setTimeout(() => {
            setVisible(false)
        }, time)
    }

    return {
        visible,
        guess,
        data,
        reset
    }
}

export default useMemory