import React from 'react';

function Index(props) {
	return (
		<div className='section section_profile'>
			<h2 className='blind'>프로필</h2>
			<img width={200} height={280} src={process.env.PUBLIC_URL + '/assets/img/img-profile.jpg'} alt="프로필 이미지" />

		</div>
	);
}

export default Index;