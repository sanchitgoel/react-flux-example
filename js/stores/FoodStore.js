// This JS File includes the Store which will handle all the Events for different Components

// Import Statements
import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";
import * as FoodActions from "../actions/FoodActions.js";


//Creating Class for FoodStore, it wil extend EventEmitter Class provided by node
class FoodStore extends EventEmitter{
	
	//Constuctor Method
	constructor(){
		super();
		//Starts: Inital Values to call at first time load of the Components
		
		//For: Food List 
		FoodActions.searchFood();
		
		//For Favourite Food
		this.foodFoodList = [];
		
		let localData = (localStorage.getItem('favItems'))?	localStorage.getItem('favItems').split(',') : [];
		localData.map(function(obj,i){
			if(obj !== "null")
			FoodActions.foodDetails(obj,"fav");	
		});
		
		//Ends: Inital Values to call at first time load of the Components
		
	}
	
	//Starts: Methods Called by Components to Fetch the Data
	getAll(){
		return this.foodList;
	}
	getFoodDetails(){
		return this.foodDetails;
	}
	getFevFoodList(){
		return this.foodFoodList;
	}
	//Ends: Methods Called by Components to Fetch the Data
	
	
	//Starts: CHange Handlers
	updateSearchResults(resultList){
		this.foodList = resultList;
		this.emit("change");
	}
	FetchFoodDetails(resultList){
		this.foodDetails = resultList;
		this.emit("foodDetailsFetched");
	}
	FecthFavFoodDetails(resultList){
		this.foodFoodList.push(resultList);
		this.emit("FecthFavFoodDetails");
	}
	removeFav(ndbno){
		let reqIndex = -1; 
		this.foodFoodList.map(function(food,i){
			if(food.ndbno === ndbno)
				reqIndex = i;
		});
		this.foodFoodList.splice(reqIndex,1);
		
	}
	//Ends: CHange Handlers
	
	
	//Starts: Action Handlers
	//All the Events fired by Actions will be handle here
	handleActions(action){
		switch(action.type){
			case "updateSearchResults":{
				this.updateSearchResults(action.resultList);
				break;
			}
			case "fecthDetails":{
				this.FetchFoodDetails(action.resultList);
				break;
			}
			case "fecthFav":{
				this.FecthFavFoodDetails(action.resultList);
				break;
			}
			case "removeFav":{
				this.removeFav(action.ndbno);
				break;
			}
		}
	}
	//Ends: Action Handlers
	
}

//Registering foodStore with Dispatcher
const foodStore = new FoodStore;
dispatcher.register(foodStore.handleActions.bind(foodStore));
export default foodStore;
