import {Text, View,StyleSheet,TextInput,Pressable} from "react-native"
import colors from "../utils/Colors"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from "../component/Logout/Button"
import Cancel from "../component/Logout/Cancel"

export default function Logout(){
    return <View style={styles.root}>
      <View style={styles.first}>

        <Text style={styles.title}>Confirm Logout</Text>
        <Text style={styles.description}>Are you sure you want to logout</Text>

      </View>

      <View style={styles.component}>

          <View style={styles.iconContainer}>
            <Ionicons name="person-circle-outline" size={32} color="red"/>
          </View>

          <Text style={styles.logIn}>currently logged in</Text>
          <Text style={styles.operator}>Operator</Text>

      </View>

      <View style={styles.second}>
        <Text style={styles.text}>Number of capsule made</Text>
        <TextInput placeholder="Enter the number of capsules produced"  keyboardType="numeric" style={styles.textInput}/>
        <Text style={styles.text2} >Required before logging with an active job</Text>
      </View>

      <View style={styles.third}>

        <Text style={styles.thirdText}>Logging out will end your current session and any active jobs</Text>
        
        <Button />

        <Cancel />
        
      </View>
    </View>
}

const styles = StyleSheet.create({
    root:{
      flex:1,
      alignItems:'center',
      padding:20
    },
    title:{
    fontSize:48,
    fontWeight:"bold",
    textAlign:'center',
    marginTop:90
  },
  description:{
    textAlign:'center',
    fontSize:20,
    color:colors.grey
  },
  component:{
    flex:1/3,
    width:"100%",
    backgroundColor:colors.darkWhite,
    alignItems:'center',
    justifyContent:'center'
  },
  operator:{
    fontSize:32,
    fontWeight:"bold"
  },
  logIn:{
    fontSize:16,
    color:colors.grey
  },
  first:{
    flex:1/3,
    width:"100%",
  },
  iconContainer:{
    width:64,
    height:64,
    backgroundColor:colors.fadeRed,
    borderRadius:32,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  second:{
    flex:1/4,
    width:"100%",
    paddingTop:20
  },
  text:{
    fontSize:20,
    fontWeight:"semibold",
    marginBottom:10
  },
  textInput:{
    backgroundColor:colors.white,
    fontSize:20,
    padding:20,
    marginBottom:10
  },
  text2:{
    fontSize:16
  },
  third:{
    color:colors.red,
    alignItems:'center',
    paddingTop:"10%"
  },
  thirdText:{
    color:colors.red,
    width:412,
    height:48,
    fontSize:20,
    textAlign:"center",
    marginBottom:20
  }
})