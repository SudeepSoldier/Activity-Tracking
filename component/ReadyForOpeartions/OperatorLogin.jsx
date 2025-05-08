import {View,Text,StyleSheet} from 'react-native'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useNavigation } from '@react-navigation/native';

export default function OperatorLogin(){

    const navigation = useNavigation();
    
    function jumpNameOperation(){
        navigation.navigate('Login')
    }

    return <View style={styles.root}>
            <View style={styles.container}>

                <View style={styles.top}>
                    <Text style={styles.operatrLoginText}>Operator Login</Text>
                    <Text style={styles.password}>Enter your passcodeand job number to begin</Text>
                </View>
                <View style={styles.input}>
                    <Input title="Job Number" placeholder="Enter job number" type="numeric"/>
                    <Input title="Operator Passcode" placeholder="Enter job password" type="numeric"/>
                </View>

                <View style={styles.button}>
                    <Button onPress={jumpNameOperation} style1={{}} style2={{}}>Login & Start Job</Button>
                </View>
            </View>

        </View>
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:50,
        alignItems:'center',
    },
    container:{
        width:"100%",
        height:"80%",
        backgroundColor:'#FFFFFF',
        paddingVertical:30
    },
    top:{
        alignItems:'center',
        justifyContent:'center',
    },
    operatrLoginText:{
        textAlign:'center',
        width:428,
        height:54,
        fontSize:48,
        fontWeight:'bold',
        marginBottom:5,
        color:'#148CB8'
    },
    password:{
        fontSize:20,
        fontWeight:200
    },
    input:{
        marginTop:50,
        paddingHorizontal:20,
        gap:15
    },
    button:{
        paddingHorizontal:20,
        marginTop:'30%'
    }
})