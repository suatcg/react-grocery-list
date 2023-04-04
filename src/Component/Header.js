import React from 'react';
import Searchbar from './Searchbar';

const Header = () => {
	return (
		<header className="border border--top">
			<h1 className="header-badge"> Grocery List</h1>
			<Searchbar />
		</header>
	);
};

export default Header;
