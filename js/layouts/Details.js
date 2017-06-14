// This Layout displays Details of a FOOD artical 

//Import Statements
import React from 'react';
import ReactDOM from "react-dom";
import HeaderNav from "../components/HeaderNav.js";
import BackButton from "../components/BackButton.js";
import FoodStore from '../stores/FoodStore.js'
import * as FoodActions from "../actions/FoodActions.js";

// Details Class created which extends component from class "React"
class Details extends React.Component {
	
	//Start: constructor method
	constructor(props){
		super();
		FoodActions.foodDetails(props.match.params.foodID);
		
		//Initial State to render at the first time
		this.state = {
			results: {
				food: {
					name:"",
					ing:{desc:""},
					ndbno:"",
					type:"",
					sr:""
					
				}
			}
		}
	}
	//Ends: constructor method
	
	//Start: Capturing the Events fired by foodStore
	//This method fires automatically when DOM mounted on APP
	componentWillMount(){
		let $this = this;
		FoodStore.on("foodDetailsFetched", function(){
			$this.setState({results: FoodStore.getFoodDetails() });
		});
	}
	
	

  render() {
	let myStyle = {margin:"100px 0"}
	let food = this.state.results.food;
	let nutrient = '', ing = '';
	
	 //Handling differnet States while rendering on the basis of DATA returned by Stores
	  if(food.name !== "")
	 	nutrient = food.nutrients.map(function(nutirent,i){
		 	
			return <li key={i} className="list-group-item clearfix">
					<span className="col-xs-7"><strong>{nutirent.name}</strong></span><span className="col-xs-5"><i>{nutirent.value}{nutirent.unit}</i></span>
				</li>;
	  });
	  
	  if(food.ing)
	  if(food.ing.desc !== "")
		  ing = food.ing.desc.split(",").map(function(name,i){
			  return <li key={i} className="list-group-item">{name}</li>;
	  });
	  
	  	//Styles in React
		let verticalMargin =  {margin:"100px 0"};
	
	  
	  
	//Returning Components to Render within DOM 
	//Components used are the same as imported at the top of this Page 
    return (
      <div style={verticalMargin}>
        <HeaderNav />
		<BackButton />
		<main className="container">			
			
			<hgroup>
				<h1 >Food Details <strong>(NDBNO: {food.ndbno})</strong></h1>
				<h2 >{food.name}</h2>
			</hgroup>
			<p>Type : {food.type}</p>
			<p>Release version  : {food.sr}</p>
			
			<div className="panel panel-primary">
				<div className="panel-heading" >
					<h3 className="panel-title" >Ingredients</h3>
				</div>
				<div className="panel-body">
					<ol className="list-group">
						{ing}
					</ol>
				</div>
			</div>
					
			<div className="panel panel-primary">
				<div className="panel-heading" >
					<h3 className="panel-title" >Nutrients</h3>
				</div>
				<div className="panel-body">
					<ul className="list-group">
						{nutrient}
					</ul>
				</div>
			</div>
		</main>
		
		
      </div>
    );
  }
}

//Exporting Class to be used by other layouts and main.js
export default Details;