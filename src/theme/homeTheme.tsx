
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        flex:2,
        justifyContent:'center',
        paddingHorizontal:30,
        paddingBottom:20
    },
    headerText:{
        fontSize:20,
        textAlign:'justify',
        color:'black'
    },
    options:{
        flex:4,
    },
    button:{
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:10,
        marginVertical:30,
        width:200
    },
    buttonText:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    }
})