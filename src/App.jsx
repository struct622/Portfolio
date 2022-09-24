import React from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Header from './components/Header';
import Main from './components/Main';

import "./scss/App.scss";

const App = () => {
	return (
		<div>
			<Header />
			<Main />
		</div>

	);
}
export default App; //다른 JS파일에서 불러올 수 있도록 내보내주기