// import React , {Component} from "react";
// import {Text, View, Button,Picker} from "react-native";

// type Props = {};

//  export default class Picker1 extends Component {
//      constructor(props){
//          super(props);
//      }

//   render(){
//          return(
//          <Picker
//             selectedValue={this.state.language}
//             style={{height: 50, width: 100}}
//             onValueChange={(itemValue, itemIndex) =>
//             this.setState({language: itemValue})
//            }>
//             <Picker.Item label="Dki Jakarta" value="java" />
//             <Picker.Item label="Jawa Barat" value="jb" />
//             <Picker.Item label="Jawa Tengah" value="jt" />
//             <Picker.Item label="D.I.Y" value="diy" />
//           </Picker>
      
//          )
//   }

// }


import React from 'react';
import {Text, Picker} from 'react-native';

const Picker1 = () => {
    return(
      <Picker
      // selectedValue={this.state.language}
      style={{height: 50, width: 100}}
      onValueChange={(itemValue, itemIndex) =>
      this.setState({language: itemValue})
     }>
      <Picker.Item label="Dki Jakarta" value="java" />
      <Picker.Item label="Jawa Barat" value="jb" />
      <Picker.Item label="Jawa Tengah" value="jt" />
      <Picker.Item label="D.I.Y" value="diy" />
    </Picker>

    )
}



 export {Picker1}
