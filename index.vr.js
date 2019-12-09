import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class assignment1 extends React.Component {
	constructor(props){
		super(props);
		this.state={bg:'Entrance.jpg',opacity:1};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		console.log("clicked");
		this.setState({bg:'Lobby_entrance.jpg',opacity:0});
		
	}

  render() {
    return (
      <View>
        <Pano source={asset(this.state.bg)}/>

	<VrButton style={{
	    backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
	    opacity:this.state.opacity
	}} onClick={this.handleClick}>
		<Text>CLICK HERE</Text>
	</VrButton>    
      </View>
    );
  }
};

AppRegistry.registerComponent('assignment1', () => assignment1);
