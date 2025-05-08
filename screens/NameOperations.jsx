import {  View,StyleSheet } from "react-native"
import TopComponent from '../component/NameOperations/TopComponent'
import BottomButtons from "../component/NameOperations/BottomButtons"

export default function NameOperations(){

    return <View style={styles.root}>
        <TopComponent/>
        <BottomButtons />
    </View>
}

const styles = StyleSheet.create({
      root:{
        flex:1,
        padding:30,
      },
      
})