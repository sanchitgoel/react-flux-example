//This Component helps in displaying the Back Button to take the user one level up according to his browser history


//Import Statements
import React from 'react';
import ReactDOM from 'react-dom';

// BackButton Class created which extends component from class "React"
class BackButton extends React.Component {
	
	//Local Method to Handle onclick 
	handleBack(){
		window.history.back();
	}
	
	
	render(){
		return(
			
			//back Button
			<div className="container">
				<a className="btn btn-info" onClick={this.handleBack.bind(this)}>Back</a>
			</div>
	
		);
	
	}

}

//Exporting Class to be used by other layouts and main.js
export default BackButton;