import { View,TextInput,StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../utils/Colors";

export default function SearchInput(){
    
    return <View style={styles.root}>

        <Ionicons name="search" size={24} color={colors.blue}></Ionicons>
        <TextInput keyboardType="numeric" placeholder="Enter your password" style={styles.input}></TextInput>

    </View>
}

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:colors.white,
        width:"95%",
        height:64,
        paddingHorizontal:40,
        gap:10
    },
    input:{
        width:"100%",
        fontSize:20
    }
})