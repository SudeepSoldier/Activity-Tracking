import {Text, View,StyleSheet} from "react-native"
import colors from "../utils/Colors"
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimeShow from "../component/TimeShow"
import Button from "../component/UI/Button"

export default function OnBreak({navigation}){

    function returnToReadyForOperation(){
        navigation.goBack()
    }
    const style1={
        fontSize:24
    }

    return  <View style={styles.root}>
                <View style={styles.componentOfTeaIcon}>
                        <View style={styles.cupIcon}>
                                <Ionicons name="cafe" size={32} color={colors.blue} />
                        </View>
                        <Text style={styles.onBreakText}>On Break</Text>
                        <Text>Your job is currently paused</Text>
                </View>
                <View style={styles.currentJob}>
                    <Text style={styles.currentJobText1}>Current Job</Text>
                    <Text style={styles.currentJobText2}>JOB-2023-001</Text>
                </View>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>Break Duration</Text>
                    <TimeShow />
                </View>
                <View style={styles.button}>
                    <Button onPress={returnToReadyForOperation} style1={style1}> 
                            
                            End Break & Return to Work
                        
                    </Button>
                    <View style={styles.endBreakButton}>
                      <Text>Machine is paused during break time</Text>
                      <Text>Break time will be recorded in your activity log</Text>
                    </View>

                </View>
            </View>
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    padding:30 
  },
  cupIcon:{
    width:64,
    height:64,
    borderRadius:32,
    backgroundColor:colors.dimBlue,
    justifyContent:'center',
    alignItems:'center'
  },
  componentOfTeaIcon:{
    width:"98%",
    height:222,
    backgroundColor:colors.dimWhite,
    padding:30,
    justifyContent:'center',
    alignItems:'center'
  },
  onBreakText:{
    fontSize:32,
    fontWeight:'500'
  },
  currentJob:{
    backgroundColor:colors.white,
    width:"98%",
    height:97,
    padding:24,
    gap:10,
    marginTop:50
  },
  currentJobText1:{
    fontSize:14,

  },
  currentJobText2:{
    fontSize:20,
    fontWeight:"500"
  },
  timer:{
      width:"98%",
      height:195,
      backgroundColor:colors.white,
      alignItems:'center',
      marginTop:10,
      padding:32,
      borderRadius:8
  },
  timerText:{
    fontWeight:"bold",
    marginBottom:"30"
  },
  button:{
    marginTop:"30%",
    alignItems:'center'
  },
  endBreakButton:{
    marginTop:15,
    alignItems:'center',
    justifyContent:'center'
  }
})