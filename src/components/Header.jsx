import React from 'react';
import { Link, useLocation } from 'react-router-dom';



function Header(props) {
	const tabListItem = [
		{
			route: '/profile',
			name: '프로필',
		},
		{
			route: '/skill',
			name: '기술',
		}
	]
	const curRoute = useLocation();
	console.log('[Header.jsx] curRoute.pathname' + curRoute.pathname);

	const tabList = tabListItem.map(
		(tabListItem, index) => <Link key={index} to={tabListItem.route} className={'item ' + (curRoute.pathname === tabListItem.route ? 'on' : '')} >{tabListItem.name}</Link>
	);

	return (
		<header id="header" className='header'>
			<h1 className='logo'>
				<Link to="/" className='logo_link'>LOWNESS</Link>
			</h1>
			<div className='tab'>
				{tabList}
			</div>
		</header>
	);
}

export default Header;