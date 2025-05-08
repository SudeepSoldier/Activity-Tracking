import { View,Text,StyleSheet } from "react-native"
import colors from "../utils/Colors"

export default function TimeShow(){
    return  <View style={styles.timerContainer}>
                <View style={styles.horizontalCenter}>
                    <Text style={styles.timer}>00</Text>
                    <Text>Hour</Text>
                </View>
                <Text style={styles.colon}>:</Text>
                <View style={styles.horizontalCenter}>
                    <Text style={styles.timer}>00</Text>
                    <Text>Minute</Text>
                </View>
                <Text style={styles.colon}>:</Text>
                <View style={styles.horizontalCenter}>
                    <Text style={styles.timer}>00</Text>
                    <Text>Second</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    timer:{
        width:91,
        height:55,
        backgroundColor:colors.dimWhite,
        textAlign:'center',
        paddingTop:15,
        fontStyle:'regular',
        fontSize:24,
        borderRadius:5,
        color:colors.blue
    },
    timerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    horizontalCenter:{
        alignItems:'center'
    },
    colon:{
        fontSize:24,
        marginHorizontal:5,
        color:colors.blue
    }
})