import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home/Index';
import Profile from './profile/Index';
import Skill from './skill/Index';

function Main(props) {
	return (
		<div className='container'>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/skill" element={<Skill />} />
			</Routes>
		</div>
	);
}

export default Main;