
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Header, Image, Picker} from "react-native";
import {Text1} from './Pick';
import Props1 from "./Props1";
import Textb from "./Textb";
import {Picker1} from "./Picker1";
import { signIn } from "./auth";
import Main from "./Main";
import axios from "axios";
// import console = require("console");
// import {Props1} from './Props1';


export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    };
    constructor(props) {
      super(props);
      this.state = {
            testData: "Empty",
            name: "Gustira",
            username: "",
            password: ""
      };
    }

    // _login = async () => {
    //     if (this.state.username === this.state.password) {
    //         let isLogin = await signIn(this.state.username, this.state.password);
    //         if (isLogin) {
    //             this.props.navigation.navigate('Main')
    //         }
    //     } else {
    //         alert("Username or password is invalid");
    //     }}

    _loginApi = async() => {
        const data = {
          username: this.state.username,
          password: this.state.password
        }
    
        // fetch("http://192.168.1.23:8080/customer/login", {
        //   method: "POST",
        //   body: JSON.stringify(data),
        //   headers: {
        //     'Content-Type':'application/json',
        //     'Accept':'application/json'
        //   }
        // }).
        //   then((result => result.json())).
        //   then(async(response) => {
        //     console.log(JSON.stringify(response));
        //     if(response.responseCode == '01') {
        //       const login = await signIn(this.state.username, this.state.password)
        //       if(login) {
        //         this.props.navigation.navigate('App');
        //       } else {
        //         alert("Username or password is invalid");            
        //       }
        //     } else {
        //       alert(response.responseMessage);
        //     }
        //   }).catch(error => {
        //     alert(error);
        //   })

        axios.post('http://192.168.1.36:8080/customer/login',data)
        .then(async (result)=>{
            const response = result.data;
            console.log(JSON.stringify(response));
            if(response.responseCode === '01') {
                const login = await signIn(this.state.username, this.state.password)
                if (login) {
                    this.props.navigation.navigate('App');
                }else{
                    this.setState({message: 'invalid username or password'})
                }
            }else{
                this.setState({message: response.responseMessage});
            }
            this.setState({isLoading: false});
        }
        ).catch(error => {
            alert(error);
            this.setState({message: 'system error', isLoading: false});
        })
      }

    
    render() {

      

      const {navigate} = this.props.navigation;
      return (

        <View style={styles.container}>
          <Text style={styles.judul}>Infinity</Text>
          <Text style={styles.dasar1}>Please Login</Text>

          <View style={styles.textin}>
          <Text style={styles.dasar}>Username</Text>
          <TextInput style={styles.inputan} onChangeText={username => this.setState({ username })}
            
            // onChangeText={testData => this.setState({ testData })}
          />
          </View>
          <View style={styles.textin}>

          <Text style={styles.dasar}>Password</Text>
          <TextInput style={styles.inputan} onChangeText={password => this.setState({ password })}
           
            // onChangeText={testData => this.setState({ testData })}
          />
          </View>
    
          <Button
            onPress={this._loginApi}
            title="Login"
          /> 

          <Image style={styles.gambar} source={require('./Resources/sti.jpeg')}/>
          
        </View>
      );
    }
}


  
const styles = StyleSheet.create({
    judul:{
        fontSize: 50,
        marginBottom: 60,
        marginTop: 50
    },

    textin:{
        flexDirection : "row",
        marginBottom: 30

    },

    dasar:{
        marginRight: 30
    },

    inputan: {

         height: 40, width: 300, borderColor: "white", borderWidth: 2,
         borderRadius: 20
    },

    gambar:{
        marginTop: 60,
        height: 200, width: 200, borderColor: "white", borderWidth: 1,
         borderRadius: 100
    },

    dasar1:{
        marginBottom: 30
    },

    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#66ccff"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});


