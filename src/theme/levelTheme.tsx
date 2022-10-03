
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:20
    },
    headerText:{
        ftextAlign:'center',
        fontSize:10,
        color:'black'
    },
    headerTextRight:{
        textAlign:'center',
        fontSize:12
    },
    hr:{
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    bodyContainer:{
        padding:10,
        marginTop:50, 
        flexDirection:'row', 
        flexWrap:'wrap', 
        justifyContent:'center'
    }
})