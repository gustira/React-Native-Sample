
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Header, Image, Picker} from "react-native";
import {Text1} from './Pick';
import Props1 from "./Props1";
import Textb from "./Textb";
import {Picker1} from "./Picker1";
// import {Props1} from './Props1';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

type Props = {};
export default class Main extends Component<Props> {
    static navigationOptions = {
        title: 'Bootcamp App'
    };
    constructor(props) {
      super(props);
      this.state = {
            Text2: "Susi",
            Text3: "Susan",
            inputan: ""
      };
    }

    _openDrawer=()=>{
      this.props.navigation.openDrawer();
    }
  
    componentWillMount() {
      console.log('will mount');
    }
  
    componentDidMount() {
      console.log('did mount');
    }
  
    componentWillUpdate(nextProps, nextState) {
      console.log('will update');
      console.log(JSON.stringify(nextProps));
      console.log(JSON.stringify(nextState));
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('did update');
      console.log(JSON.stringify(prevProps));
      console.log(JSON.stringify(prevState));
    }



     dariParent(data) {
      alert(data);
     }


      dariParent2= (dataa) =>{
        this.setState({inputan:dataa})   
    }

    
    
    render() {
      const {navigate} = this.props.navigation;
      return (


        <View style={styles.container}>


          <Button
            onPress={this._openDrawer}
            title="Open Drawer"
          />  
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit Main.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
    
          <Button
            onPress={() => navigate('Tool')}
            title="Press Me"
          />  

          <Button
            onPress={() => navigate('Tool')}
            title="Login"
          />  

        
     
          <Text1/>

          <Props1 onTrigger = {this.dariParent} data = {this.state.Text2}/>

          <Text style={styles.instructions}>hasil input : {this.state.inputan}</Text>
          
          {/* <Picker1/> */}

          <Textb onTriggerr = {this.dariParent2} dataa = {this.state.inputan}/>

          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            
           }
           >
            <Picker.Item label="Dki Jakarta" value="java" />
            <Picker.Item label="Jawa Barat" value="jb" />
            <Picker.Item label="Jawa Tengah" value="jt" />
            <Picker.Item label="D.I.Y" value="diy" />
          </Picker>
          
          <Picker1/>

         




          {/* <Text1 data={this.state.data} onPress={this._handleSelect} />
          <Text1>Hello {this.props.name}!</Text> */}

        {/* style={{alignItems: 'center', top: 50}}>
        <Pick name='Rexxar' />
        <Pick name='Jaina' />
        <Pick name='Valeera' /> */}

        {/* <Props1 data={this.state.name} dataFun={this.parentFunction}/> */}
          
        </View>
      );
    }
}


  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
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


