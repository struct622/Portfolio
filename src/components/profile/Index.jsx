import React from 'react';

function Index(props) {
	return (
		<div className='content'>
			<h2 className='title'>프로필</h2>
			{/* <img width={200} height={280} src={process.env.PUBLIC_URL + '/assets/img/img-profile.jpg'} alt="프로필 이미지" /> */}

			<div className='section section_profile'>
				<dl className='desc_list'>
					<dt className='tit'>이름</dt>
					<dd className='cont'>김동운</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>생년월일</dt>
					<dd className='cont'>1992.06.22</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>연락처</dt>
					<dd className='cont'>
						<ul className='cont_list'>
							<li className='item'>
								<a href='tel: 010-9189-2348' className="link">Phone: 010-9189-2348</a>
							</li>
							<li className='item'>
								<a href="mailto: struct622@gmail.com" className="link">Email : struct622@gmail.com</a>
							</li>
						</ul>
					</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>학력</dt>
					<dd className='cont'>
						<ul className='cont_list'>
							<li className='item'>
								정왕고등학교 졸업 (2008.03 ~ 2011.02)
							</li>
							<li className='item'>
								명지대학교 졸업 (2011.03 ~ 2018.08)
							</li>
						</ul>
					</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>경력</dt>
					<dd className='cont'>

					</dd>
				</dl>
			</div>
		</div>
	);
}

export default Index;