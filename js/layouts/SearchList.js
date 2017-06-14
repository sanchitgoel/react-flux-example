// This Layout displays Home Page for searching Food and displaying results
// By Default it will show all the list of food


//Import Statements
import React from 'react';
import ReactDOM from "react-dom";
import HeaderNav from "../components/HeaderNav.js";
import SearchPanel from "../components/SearchPanel.js";

// SearchList Class created which extends component from class "React"
class SearchList extends React.Component {
	
	render() {
		
		//Styles in React
		let verticalMargin =  {margin:"100px 0"};
		
	  	return (
		  <div style={verticalMargin}>
			<HeaderNav />
			<main className="container">			
				<SearchPanel />
			</main>
		  </div>
		);
  	 }
}

//Exporting Class to be used by other layouts and main.js
export default SearchList;