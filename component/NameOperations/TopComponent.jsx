import { View,Text,Pressable,StyleSheet } from "react-native";
import TimeShow from "../TimeShow";
import colors from "../../utils/Colors";
import Title from "../Title";

export default function TopComponent(){

    return <View>
        <Title title1="John Operator" title2="OPERATOR"/>
        <View style={styles.component}>
                <View style={styles.component1}>
                        <View>
                            <Text style={styles.component1Text1}>Machine</Text>
                            <Text style={styles.component1Text2}>Currently operating</Text>
                            <Text style={styles.component1Text3}>CNC MILL 1</Text>
                            <Text style={styles.component1Text2}>Code: CNC-001</Text>
                        </View>
                        <Pressable style={styles.activeButton}>
                            <Text style={styles.activeButtonText}>Active</Text>
                        </Pressable>
                </View>
                <View style={styles.component2}>
                        <Text style={styles.component1Text1}>Active Job</Text>
                        <Text style={styles.component1Text2} >Currently in progress</Text>
                        <Text style={styles.component1Text3}>JOB-2023-001</Text>
                        <Text style={styles.component1Text2}>Manufacturing of aerospace components</Text>
                </View>
        </View>
        
        <View style={styles.timeShow}>
            <Text style={styles.component1Text3}>Current Session</Text>
            <Text style={styles.component1Text2}>Time elapsed since login</Text>
            <View style={styles.time}>
                <TimeShow  />
            </View>
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    component1:{
        backgroundColor:colors.white,
        flexDirection:"row",
        padding:20,
        flex:1/2,
        
    },
    component2:{
        backgroundColor:colors.white,
        padding:20,
        flex:1/2
    },
    component:{
        flexDirection:"row",
        gap:"5%",
        marginTop:50
    },
    component1Text1:{
        fontSize:16,
        fontWeight:"semibold",
    },
    component1Text2:{
        fontSize:14,
        color:colors.grey,
        marginTop:5
    },
    component1Text3:{
        fontSize:20,
        marginTop:20
    },
    activeButton:{
        backgroundColor:colors.blue,
        width:78,
        height:28,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:"25%",
        marginLeft:"35%"         
    },
    activeButtonText:{
        color:"white"
    },
    timeShow:{
        backgroundColor:colors.white,
        marginTop:20,
        paddingHorizontal:20,
        paddingBottom:20,
        paddingTop:10
    },
    time:{
        marginTop:30
    }
})