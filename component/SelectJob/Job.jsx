import colors from "../../utils/Colors";
import {View,Text,StyleSheet} from "react-native"

export default function Job({title,description,level}){
    return <View style={styles.root}>

        <View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

        </View>
        <View style={styles.level}>
            <Text style={styles.levelText}>{level}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"95%",
        height:97,
        padding:30,
        backgroundColor:colors.white,
        marginTop:20
    },
    title:{
        fontSize:20,
        fontWeight:"semibold",
    },
    description:{
        fontSize:14,
        color:colors.grey,
        marginTop:5
    },
    levelText:{
        color:colors.red
    },
    level:{
        width:87,
        height:27,
        borderColor:colors.red,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    }
})