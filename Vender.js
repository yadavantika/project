import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Vender() {
    
    const [disable,setDisable] = useState({
        Constact_person:false,
        Email:false,
        Phone1:false,
        Phone2:false,
        Shop_name:false,
        Address1:false,
        Address2:false,
        Landmark:false,
        City:false,
        Pincode:false,
        District:false,
        State:false,
        Shipping_charges:false,
        Password:false,
    })
    const [user,setUser] = useState({
        Constact_person:'',
        Email:'',
        Phone1:'',
        Phone2:'',
        Shop_name:'',
        Address1:'',
        Address2:'',
        Landmark:'',
        City:'',
        Pincode:'',
        District:'',
        State:'',
        Shipping_charges:'',
        Password:'',        
    })
    const [temp,setTemp] = useState({
        Constact_person:0,
        Email:0,
        Phone1:0,
        Phone2:0,
        Shop_name:0,
        Address1:0,
        Address2:0,
        Landmark:0,
        City:0,
        Pincode:0,
        District:0,
        State:0,
        Shipping_charges:0,
        Password:0,     
    })

    const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)
  
    const changeIcon = () => {
      icon !== "eye-slash"
        ? (setIcon("eye-slash"), setHidePassword(true))
        : (setIcon("eye"), setHidePassword(false))
    }

// function getEmails(){
//     const dbRef = firebase.database().ref();
//     const dbtable=dbRef.child("vender_info");
//     dbtable.get().then((snapshot) => {
//         if (snapshot.exists()) {
//             const array2=snapshot.val();
//             const userId=Object.keys(array2);
//             for(var i=0;i<userId.length;i++){
//                 dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
//                     Email.push(snapshot.val());
//                 }).catch((error)=>{
//                     console.log(error)
//                 })
//             }
//         }
//         else{
//             console.log("No data available"); 
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
//     return Email;
// }
// function getPhone() {
//     const dbRef = firebase.database().ref();
//     const dbtable=dbRef.child("vender_info");
//     dbtable.get().then((snapshot) => {
//         if (snapshot.exists()) {
//             const array2=snapshot.val();
//             const userId=Object.keys(array2);
//             for(var i=0;i<userId.length;i++){
//                 dbtable.child(userId[i]).child("Phone").get().then((snapshot)=>{
//                     Phone.push(snapshot.val());
//                 }).catch((error)=>{
//                     console.log(error)
//                 })
//             }
//         }
//         else {
//             console.log("No data available");
//         }
//         }).catch((error) => {
//             console.error(error);
//         });
//         return Phone;
// }

// const [Email,setEmail] = useState([getEmails()])
// const [Phone,setPhone]=useState([getPhone()])

return(
    <View style={{flex:1}}>
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:27, fontWeight:'bold'}}>WELCOME</Text>
        </View> 
        <ScrollView>
            <View style={{paddingBottom:25}}>
                <Text style={{textAlign:'center',fontSize:18,marginTop:10}}>Kindly fill the following details.</Text>
                <Text style={styles.title}>Name:(First and Last Name)</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g. John Doe'} 
                    onChangeText={(text)=>{
                        setUser({
                            ...user,
                            Name:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Name==0){
                            setTemp({
                                Name:temp.Name+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z]{1,40}( [a-zA-Z\']{1,40})$/;
                            setDisable({
                                ...disable,
                                Name:(!pattern.test(user.Name))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Name) && 'Please fill in a name with only alphabets.'}</Text>
                <Text style={styles.title}>Email-ID:</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g.johndoe@gmail.com'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Email:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Email==0){
                            setTemp({
                                Email:temp.Email+1
                            })
                        }
                        else{
                            const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                            setDisable({
                                ...disable,
                                Email:(!pattern.test(user.Email))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Email) && 'Invalid Email id'}</Text>
                <Text style={styles.title}>Phone1:</Text>                        
                <TextInput style={styles.field} 
                    placeholder={'E.g. 1234567890'} 
                    keyboardType={"numeric"}
                    onChangeText={(text)=>{ 
                        setUser({
                            ...user,
                            Phone1:text
                        });
                    }}
                    onBlur={(e)=>{
                        if(temp.Phone1==0){
                            setTemp({
                                Phone1:temp.Phone1+1
                            })
                        }
                        else{
                            const pattern = /^[6-9]\d{9}$/ 
                            user.Phone1.trim();
                            setDisable({ 
                                ...disable,
                                Phone1:(!pattern.test(user.Phone1))
                            }); 
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Phone1) && 'Invalid Contact No'}</Text>
                <Text style={styles.title}>Phone2:</Text>                        
                <TextInput style={styles.field} 
                    placeholder={'E.g. 1234567890'} 
                    keyboardType={"numeric"}
                    onChangeText={(text)=>{ 
                        setUser({
                            ...user,
                            Phone2:text
                        });
                    }}
                    onBlur={(e)=>{
                        if(temp.Phone2==0){
                            setTemp({
                                Phone2:temp.Phone2+1
                            })
                        }
                        else{
                            const pattern = /^[6-9]\d{9}$/ 
                            user.Phone2.trim();
                            setDisable({ 
                                ...disable,
                                Phone2:(!pattern.test(user.Phone2))
                            }); 
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Phone2) && 'Invalid Contact No'}</Text>
                <Text style={styles.title}>Shop_Name:</Text>                        
                <TextInput style={styles.field} 
                    placeholder={'E.g.Some Shop'} 
                    onChangeText={(text)=>{
                        setUser({
                            ...user,
                            Shop_name:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Shop_name==0){
                            setTemp({
                                Shop_name:temp.Shop_name+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z]{1,40}( [a-zA-Z\']{1,40})$/;
                            setDisable({
                                ...disable,
                                Shop_name:(!pattern.test(user.Shop_name))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Shop_name) && 'Invalid Name'}</Text>
                <Text style={styles.title}>Address1:</Text>
                <TextInput style={styles.field} 
                    placeholder={'Room No/Building Name'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Address1:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Address1==0){
                            setTemp({
                                Address1:temp.Address1+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z0-9\s\-\.\''\,]+$/; 
                            setDisable({
                                ...disable,
                                Address1:(!pattern.test(user.Address1))
                            });
                        }    
                    }}
                />
                <Text style={styles.error}>{(disable.Address1) && 'Invalid Address'}</Text>
                <Text style={styles.title}>Address2:</Text>
                <TextInput style={styles.field} 
                    placeholder={'Street/Area'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Address2:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Address2==0){
                            setTemp({
                                Address2:temp.Address2+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z0-9\s\-\.\''\,\()]+$/; 
                            setDisable({
                                ...disable,
                                Address2:(!pattern.test(user.Address2))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Address2) && 'Invalid Address'}</Text>
                <Text style={styles.title}>Landmark:</Text>
                <TextInput style={styles.field} 
                    placeholder={'Optional'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Landmark:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Landmark==0){
                            setTemp({
                                Landmark:temp.Landmark+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z0-9\s\-\.\''\,\()]+$/; 
                            setDisable({
                                ...disable,
                                Landmark:(!pattern.test(user.Landmark))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Landmark) && 'Invalid Landmark'}</Text>
                <Text style={styles.title}>City:</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g. Mumbai'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            City:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.City==0){
                            setTemp({
                                City:temp.City+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/; 
                            setDisable({
                                ...disable,
                                City:(!pattern.test(user.City))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.City) && 'Invalid City'}</Text>
                <Text style={styles.title}>Pincode:</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g. 123456'} 
                    keyboardType={"numeric"} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Pincode:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Pincode==0){
                            setTemp({
                                Pincode:temp.Pincode+1
                            })
                        }
                        else{
                            const pattern = /^[1-9][0-9]{5}$/; 
                            setDisable({
                                ...disable,
                                Pincode:(!pattern.test(user.Pincode))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Pincode) && 'Invalid Pincode'}</Text>
                <Text style={styles.title}>District:</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g. Thane'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            District:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.District==0){
                            setTemp({
                                District:temp.District+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/; 
                            setDisable({
                                ...disable,
                                District:(!pattern.test(user.District))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.District) && 'Invalid District'}</Text>
                <Text style={styles.title}>State:</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g. Maharashtra'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            State:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.State==0){
                            setTemp({
                                State:temp.State+1
                            })
                        }
                        else{
                            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/; 
                            setDisable({
                                ...disable,
                                State:(!pattern.test(user.State))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.State) && 'Invalid State'}</Text>
                <Text style={styles.title}>Shipping_charges</Text>
                <TextInput style={styles.field} 
                    placeholder={'E.g 76.55'} 
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Shipping_charges:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Shipping_charges==0){
                            setTemp({
                                Shipping_charges:temp.Shipping_charges+1
                            })
                        }
                        else{
                            const pattern = /^\d{1,3}$/; 
                            setDisable({
                                ...disable,
                                Shipping_charges:(!pattern.test(user.Shipping_charges))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Shipping_charges) && 'Invalid Sipping_char'}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title}>Password:</Text>
                    <Icon style={{marginTop:32}}name={icon} size={20} onPress={() => changeIcon()}/>
                </View>
                <TextInput style={styles.field} 
                    secureTextEntry={hidePassword}
                    placeholderTextColor="grey"
                    placeholder={'Minimum 8 characters'} 
                    onChangeText={(text) => {
                        setUser({
                            ...user,
                            Password:text
                        });
                    }} 
                    onBlur={(e)=>{
                        if(temp.Password==0){
                            setTemp({
                                Password:temp.Password+1
                            })
                        }
                        else{
                            const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
                            setDisable({
                                ...disable,
                                Password:(!pattern.test(user.Password))
                            });
                        }
                    }}
                />
                <Text style={styles.error}>{(disable.Password) && 'Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character.'}</Text>
            </View>
            <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity style={styles.button} 
                    onPress={(e)=>{
                        if(disable.Name==false && disable.Email==false && disable.Phone1==false && disable.Phone2==false && disable.Shop_name==false && disable.Address1==false && disable.Address2==false &&  disable.City==false && disable.Pincode==false && disable.District==false && disable.State==false && disable.Shipping_charges==false && disable.Password==false)
                        {
                            // if(Email.includes(user.Email)||Phone.includes(user.Phone))
                            // {
                            //     Alert.alert("Error","Your email id or contact is already registrated. Please login",[
                            //         { 
                            //             text: "OK", onPress: () => {
                            //             console.log("OK Pressed"); 
                            //         }
                            //     }])
                            // }
                            // else
                            // {
                                if( user.Name=='' || user.Email=='' || user.Phone1=='' || user.Phone2=='' ||user.Shop_name=='' || user.Address1=='' || user.Address2=='' ||  user.City=='' || user.Pincode=='' || user.District=='' || user.State=='' || user.Shipping_charges=='' || user.Password=='')
                                {
                                    Alert.alert("Error","All fields are required.",[
                                    { 
                                        text: "OK", onPress: () =>{ 
                                            console.log("OK Pressed");
                                        }
                                    }])
                                }      
                 
                                else{
                                    firebase.database().ref('vender_info/').push(user);
                                    Alert.alert("Sign Up Sucessful","Please login in to your account",[
                                    { 
                                        text: "OK", onPress: () => {
                                            console.log("OK Pressed"); 
                                        }
                                    }])
                                }
                          //  }
                        }      
                        else{
                            Alert.alert("Login Unsuccessful","Please make sure there are no invalid fields",[
                            { 
                                text: "OK", onPress: () =>{ 
                                    console.log("OK Pressed");
                                }
                            }])
                        }
            
                    }}
                >
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>  
)
}


const styles = StyleSheet.create({
container: {
  backgroundColor: '#4ef5df',
  padding:10,
},
title: {
  margin:10,
  fontSize:18,
  paddingTop:20,
  paddingLeft:10,
  fontWeight: 'bold',  
},
field: {
  borderWidth:2,
  marginLeft:10,
  marginRight:10,
  borderColor:'#4ef5df',
  height:40,
  fontSize:15,
  padding:10,
  borderRadius:20,
},
error: {
    fontSize:15,
    color:"red",
    marginLeft:20,
},
button: {
    backgroundColor: '#4ef5df',
    alignItems:'center',
    width: 170,
    borderRadius:20,
    padding:10,
    marginBottom:20,
}
});  