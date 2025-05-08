import { View,StyleSheet } from "react-native";
import Button from './Button';

export default function BottomButtons(){
    return  <View style={styles.root}>
        <View style={styles.flexDirectionRow}>
                <Button icon="pause" title="Take Break"/>
                <Button icon="create" title="Change Job" />

        </View>
        <View style={styles.flexDirectionRow}>

                <Button icon="checkmark-circle" title="End Job" />
                <Button icon="log-out" title="Logout" />
                
        </View>
            </View>
}

const styles = StyleSheet.create({
    root:{
        marginTop:200
    },  
    flexDirectionRow:{
        flexDirection:'row',
        gap:20
    }
    
})