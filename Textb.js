import React , {Component} from "react";
import {Text, View, Button, TextInput} from "react-native";

type Props = {};

 export default class Props1 extends Component {
     constructor(props){
         super(props);
     }

  render(){
         return(

                <TextInput style={{ height: 40, width: 400, borderColor: "gray", borderWidth: 1}}
                onChangeText={(dataa)=>{
                    const{onTriggerr} = this.props;
                    if (onTriggerr && typeof onTriggerr === 'function'){
                        onTriggerr(dataa)
                }
                     }}  />
                    //  value={this.props.data}
                /* }
                    style={{ height: 40, width: 400, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={testData => this.setState({ testData })}
                />

                 <Button onPress={()=>{
                     const {onTrigger, data} = this.props;
                     if (onTrigger && typeof onTrigger === 'function'){
                         onTrigger(data)
                     }
                 }} title='tekan'/> */


         )
  }
}


