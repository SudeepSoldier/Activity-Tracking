import { Pressable } from "react-native"
import {Text, View,StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Button({children,onPress,style1}){
    return  <Pressable onPress={onPress} style={styles.buttonContainer}>
        
                <View style={[styles.root]}>
                    {children=="End Break & Return to Work" && <Ionicons name="arrow-back" size={24} color="white"/> }
                    <Text style={[styles.text,style1]}>{children}</Text>

                </View>

            </Pressable>
}

const styles = StyleSheet.create({

    root:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#148CB8',
        flexDirection:"row",
        width:559,
        height:64
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        paddingVertical:10, 
        fontSize:32    
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center'
    }

})