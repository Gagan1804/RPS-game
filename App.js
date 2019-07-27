import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    user_choice: '',
    computer_choice:'',
    choices: ['Rock','Paper','Scissor'],
    result:''
 }

handleMove = (choice) => {
  const choices=this.state.choices;
  const user_choice=this.state.user_choice;
  const computer_choice = choices[Math.floor(Math.random() * 3)];
  switch(choice){
    case 'Rock':
      this.setState({user_choice:choices[0], computer_choice});
      if(computer_choice === "Scissor")
      return this.setState({result: "You have won"})
      if(computer_choice === "Paper")
      return this.setState({result: "You have lost"})
      this.setState({result: "Its a draw"})
      break
    case 'Paper':
      this.setState({user_choice:choices[1], computer_choice})
      if(computer_choice === "Rock")
      return this.setState({result: "You have won"})
      if(computer_choice === "Scissor")
      return this.setState({result: "You have lost"})
      this.setState({result: "Its a draw"})
      break
    case 'Scissor':
      this.setState({user_choice:choices[2], computer_choice})
      if(computer_choice === "Paper")
      return this.setState({result: "You have won"})
      if(computer_choice === "Rock")
      return this.setState({result: "You have lost"})
      this.setState({result: "Its a draw"})
      break
  }
  
}

  render() {
    var user_choice = this.state.user_choice;
    var computer_choice  = this.state.computer_choice;
    var result = this.state.result;
    return (
      <View style={styles.container}>

        <View style={styles.container}>
          <Text style={{fontSize:25,color:"#fff" }}>Rock Paper Scissor !</Text>
          <Text style={{fontSize:15,color:"#fff" }}>Inshallah jeet aapki ho :)</Text>
        </View>
        <View style={styles.container}>
          <Text style={{color:"#fff" ,fontSize:15}}>Select your move:</Text>
        </View>
        <View style={styles.choiceContainer}>
          <TouchableOpacity 
          style={styles.choiceButton}
          onPress={ () => {this.handleMove('Rock') }}>
            <Text style={{fontSize:20}}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.choiceButton}
            onPress={ () => {this.handleMove('Paper') }}>
            <Text style={{fontSize:20}}>Paper</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.choiceButton}
          onPress={ () => {this.handleMove('Scissor') }}>
            <Text style={{fontSize:20}}>Scissor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={{color:"#fff" ,fontSize:20}}>Your move:{user_choice}</Text>
          <Text style={{color:"#fff" ,fontSize:20}}>Computer's move:{computer_choice}</Text>
        </View>
        <View style={styles.container}>
          <Text style={{color:"#fff" ,fontSize:20}}>{result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceContainer:{
    flexDirection:'row'
  },
  choiceButton:{
    backgroundColor:'#ffffb3',
    borderRightWidth:1,
    borderRadius:90,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    margin: 5,
    padding:25
  }
});
