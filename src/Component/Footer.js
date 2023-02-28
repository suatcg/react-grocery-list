import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer className="border border--bottom">
			<p>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
