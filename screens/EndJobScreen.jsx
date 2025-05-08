import { View,StyleSheet,Text } from "react-native"
import colors from "../utils/Colors"
import Input from "../component/UI/Input"
import Button from "../component/EndJobScreen/Button"
import CancelButton from "../component/EndJobScreen/CancelButton"
import TextArea from "../component/EndJobScreen/TextArea"

export default function EndJobScreen(){

    const styleInput={
        backgroundColor:colors.white,
        width:746,
        height:64,
        padding:20,
        paddingVertical:20
    }

    const styleInput2={
        height:194,
        textAlignVertical:"top"
    }

    const styleTitle={
        fontSize:20,
        marginBottom:10
    }

    return  <View style={styles.root}>

                <Text style={styles.heading}>End Current Job</Text>
                <Text style={styles.headingText}>You are about to complete the current job</Text>

                <View style={styles.currentJob}>
                    <Text style={styles.currentJobText1}>current Job</Text>
                    <Text style={styles.currentJobText2}>JOB-2023-001</Text>
                </View>
                
                <View style={styles.input}>
                   <Input title="Number of capsule made" placeholder="Enter the number of capsules produced" type="numeric" addStyleInput={styleInput} addStyleTitle={styleTitle} />
                </View>

                <View style={styles.input}>
                    <TextArea title="Completion Note (Optional)" placeholder="Add note about your job completion..."/>
                </View>

                <View style={styles.button}>
                    <Button />
                </View>
                <CancelButton />
                
                <View style={styles.bottomText}>
                    <Text style={styles.text}>Machine is paused during break time</Text>
                    <Text style={styles.text}>Break time will be recorded in your activity log</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    heading:{
        fontSize:32,
        fontWeight:'semibold',
        textAlign:'center',
        marginTop:100
    },
    button:{
        marginTop:10
    },  
    headingText:{
        textAlign:'center',
        fontSize:12,
        color:colors.grey
    },
    currentJob:{
        width:"90%",
        height:97,
        backgroundColor:colors.white,
        padding:20,
        gap:8,
        marginTop:70
    },
    currentJobText1:{
        fontSize:14,
        color:colors.grey
    },
    currentJobText2:{
        fontSize:20,
        fontWeight:'semibold'
    },
    root:{
        alignItems:'center',   
    },
    input:{
        marginTop:20      
    },
    bottomText:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:colors.dimPurple
    }
})