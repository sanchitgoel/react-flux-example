// This Compoent helps in rendering Search List

//Import Statements
import React from 'react';
import ReactDOM from 'react-dom';
import SearchData from './SearchData.js'
import FoodStore from '../stores/FoodStore.js'
import * as FoodActions from "../actions/FoodActions.js";

class SearchPanel extends React.Component {
	//Start: constructor method
	constructor(){
		super();
		
		//Initial Values
		this.state = {
						data:"", results: FoodStore.getAll()
		};
		
		//Binding local Methods with the current Object
		this.handleSearch = this.handleSearch.bind(this);
	}
	//Ends: constructor method

	//This method helps in capuring events fired by foodStore
	//This method fires automatically when DOM mounted on APP
	componentWillMount(){
		let $this = this;
		FoodStore.on("change", function(){
			$this.setState({results: FoodStore.getAll() });
		});
	}
	
	//Local Methos
	handleSearch(e){
		FoodActions.searchFood(e.target.value);
		let resultsDataList = [];
		let $this = this;
		this.setState({ data: e.target.value });
	}
	
	render(){
		let styleMarB15 = {marginBottom:15};
		let searchDataResults = '';
		
		//Handling differnet States while rendering on the basis of DATA returned by Stores
		if(this.state.results === undefined) 
		{	
			searchDataResults = <div className="col-xs-12 text-center"><h4>Fetching Food List....</h4></div>; 
		}
		else if(this.state.results.length > 0){
			searchDataResults = this.state.results.map((item, i)=>{
				return <SearchData key={i} data={item} />;
			});
		}
		else{
			searchDataResults = <div className="col-xs-12 text-center"><h4>☹ No Result Found</h4></div>
		}
		
		//Returning Components to Render within DOM 
		//Components used are the same as imported at the top of this Page	
		return (
			<div>
				<div className="form-group" style={styleMarB15}>
				  <input 
						type="text" 
						className="form-control" placeholder="Search Food" 
						onChange={this.handleSearch.bind(this)}
						value={this.state.data}
					/>
				  
				</div>
				 
				<div className="row">{searchDataResults}</div>
			</div>
		);
	}
	
}

//Exporting Class to be used by other layouts and main.js
export default SearchPanel;