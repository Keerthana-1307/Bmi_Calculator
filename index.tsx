//npx create-expo-app BMICalculator
//cd BMICalculator
//After pasting below code in app->tabs->index.tsx
//npm start


import React, {useState} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet
} from 'react-native';

export default function HomeScreen(){

const [height,setHeight]=useState('');
const [weight,setWeight]=useState('');
const [bmi,setBmi]=useState('');
const [status,setStatus]=useState('');

const calculateBMI=()=>{

if(!height || !weight){
alert("Enter all fields");
return;
}

let h=Number(height)/100;
let w=Number(weight);

let result=w/(h*h);

setBmi(result.toFixed(2));

if(result<18.5){
setStatus("Underweight");
}
else if(result<25){
setStatus("Normal");
}
else if(result<30){
setStatus("Overweight");
}
else{
setStatus("Obese");
}

};

return(
<View style={styles.container}>

<Text style={styles.heading}>
BMI Calculator
</Text>

<TextInput
style={styles.input}
placeholder="Height in cm"
placeholderTextColor="gray"
keyboardType="numeric"
value={height}
onChangeText={setHeight}
/>

<TextInput
style={styles.input}
placeholder="Weight in kg"
placeholderTextColor="gray"
keyboardType="numeric"
value={weight}
onChangeText={setWeight}
/>

<TouchableOpacity
style={styles.button}
onPress={calculateBMI}
>
<Text style={styles.btnText}>
Calculate BMI
</Text>
</TouchableOpacity>

<Text style={styles.result}>
BMI: {bmi}
</Text>

<Text style={styles.result}>
{status}
</Text>

</View>
)
}

const styles=StyleSheet.create({
container:{
flex:1,
padding:30,
justifyContent:"center",
backgroundColor:"#f5f5f5"
},
heading:{
fontSize:30,
fontWeight:"bold",
textAlign:"center",
marginBottom:30
},
input:{
backgroundColor:"#fff",
borderWidth:1,
padding:15,
marginBottom:20,
borderRadius:10
},
button:{
backgroundColor:"green",
padding:15,
borderRadius:10
},
btnText:{
color:"white",
textAlign:"center",
fontSize:18,
fontWeight:"bold"
},
result:{
marginTop:25,
fontSize:24,
textAlign:"center",
fontWeight:"bold"
}
});