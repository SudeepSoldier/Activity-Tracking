import { View,Text,StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Title({title1,title2}){

    return  <View style={styles.root}>
                <View style={styles.alert}>

                    <Ionicons name="warning" size={32} color="white"/>
                    
                </View>
                <View style={styles.texts}>
                        <Text style={{fontStyle:"normal",fontWeight:'400',fontSize:30,height:40}}>{title1}</Text>
                        <Text style={{fontStyle:"normal",fontWeight:'200',fontSize:18}}>{title2}</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    alert:{
        width:64,
        height:64,
        borderRadius:32,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#148CB8',
    },
    root:{
        flexDirection:'row',
        gap:15,
        width:262,
        height:64
    },
    texts:{
        justifyContent:'center',
    }
})