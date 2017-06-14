//This component displays the footer element
//This will help in pagination of the search results

//Import Statements
import React from 'react';
import ReactDOM from 'react-dom';

// Favourite Class created which extends component from class "React"
class Footer extends React.Component {
render(){
	
	let paginationStyle = {
		margin: 10
	};
	return(
			<footer className="navbar-fixed-bottom navbar-inverse">
				<nav aria-label="navigation">
				  <ul className="pagination pagination-sm" style={paginationStyle}>
					<li>
					  <a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					  </a>
					</li>
					<li><a href="#" className="active">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li>
					<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					  </a>
					</li>
				  </ul>
				</nav>
		</footer>
	);
	
}

}

//Exporting Class to be used by other layouts and main.js
export default Footer;