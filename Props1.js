import React , {Component} from "react";
import {Text, View, Button} from "react-native";

type Props = {};

 export default class Props1 extends Component {
     constructor(props){
         super(props);
     }

  render(){
         return(
             <View>
                 <Button onPress={()=>{
                     const {onTrigger, data} = this.props;
                     if (onTrigger && typeof onTrigger === 'function'){
                         onTrigger(data)
                     }
                 }} title='tekan'/>


             </View>
         )
  }

}
