import {Text,StyleSheet, View} from "react-native"
import SearchInput from "../component/SelectJob/SearchInput"
import Job from "../component/SelectJob/Job"
import colors from "../utils/Colors"

export default function ChangeJob(){
    
    return <View style={styles.root}>
            <Text style={styles.title} >Select Job</Text>

            <SearchInput/>
            <Job title="JOB-2023-001" description="Current Job" level="High" />
            <Job title="JOB-2023-001" description="Current Job" level="High" />
            <Job title="JOB-2023-001" description="Current Job" level="High" />
            <Job title="JOB-2023-001" description="Current Job" level="High" />
            <Job title="JOB-2023-001" description="Current Job" level="High" />
           
            <View style={styles.bottomText}>
                <Text style={styles.text}>Select a job to begin working on it</Text>
                <Text style={styles.text}>if you don't see ajob contact your supervisor</Text>
                                
            </View>
        </View>
}

const styles = StyleSheet.create({
    root:{
        padding:20
    },
  title:{
    fontSize:32,
    fontWeight:"semibold",
    marginBottom:20
  },
  bottomText:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:200
},
text:{
    textAlign:'center',
    fontSize:20,
    color:colors.dimPurple
} 
})