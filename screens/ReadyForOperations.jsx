import Title from '../component/Title'
import { View,StyleSheet,Text } from 'react-native'
import OperatorLogin from '../component/ReadyForOpeartions/OperatorLogin'
import axios from 'axios';

const API_URL = 'https://v0-machine-tracking-z9-jpqq5h5d4-agms-projects-dc96b51f.vercel.app/api/operator/login';

const headers = {
    'Content-Type': 'application/json',
    'Cookie':'_vercel_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ5eFE2aVBVbTdzajBCYTBKT29JdjFnZ1oiLCJpYXQiOjE3NDY1MzY2MzEsIm93bmVySWQiOiJ0ZWFtX1RUQW04eTFBV0JPNFBsRXhLSkxtVHRuaiIsImF1ZCI6InYwLW1hY2hpbmUtdHJhY2tpbmctejktanBxcTVoNWQ0LWFnbXMtcHJvamVjdHMtZGM5NmI1MWYudmVyY2VsLmFwcCIsInVzZXJuYW1lIjoibXVydHV6YWthcGFkaWExMjEtZ21haWxjb20iLCJzdWIiOiJzc28tcHJvdGVjdGlvbiJ9.SViuUYgGVOvKFgM1ddfssHZDRqnoow_JWu1SyeiXmW0; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZTc4NDg1My0zZmY4LTQwODItYWIwYS04ODc2ODhkZTYzYmQiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzQ2NTM3MTYzLCJleHAiOjE3NDY2MjM1NjN9.vFl3_Z4uEf68grZYpgbQJYLGrwcagxvMbxhAY2YVz1U'
  };
  
  const body = {
        jobNumber: "JOB-2023-004",
        passcode: "123456"
    }

  axios.post(API_URL, body, { headers })
  .then(response => {
    console.log('✅ Success:', response.data);
  })
  .catch(error => {
    console.error('❌ Error:', error.response?.data || error.message);
  });

export default function ReadyForOperations(){

    console.log("hello world2");

    return <View style={styles.container}>
    <View style={styles.root}>
            <Title title1="CNC Mill 1" title2="Ready for operaion"/>
            <OperatorLogin />

            <View style={styles.bottomText}>

                <Text style={{fontWeight:200}}>if you need assistance,please contactyour supervisor</Text>
                <Text style={{fontWeight:200}} >Tablet ID:TABLET-001</Text>

            </View>
         </View>

    </View>
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    bottomText:{
        alignItems:'center',
        justifyContent:'center',
        gap:6
    },
    container:{
      flex:1,
      padding:30
    }
})