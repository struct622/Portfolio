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
								<a href='tel: 010-9189-2348' className='link'>Phone: 010-9189-2348</a>
							</li>
							<li className='item'>
								<a href="mailto: struct622@gmail.com" className='link'>Email : struct622@gmail.com</a>
							</li>
						</ul>
					</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>학력</dt>
					<dd className='cont'>
						<ul className='cont_list'>
							<li className='item'>
								정왕고등학교 졸업
							</li>
							<li className='item'>
								명지대학교 졸업 (컴퓨터 공학)
							</li>
						</ul>
					</dd>
				</dl>
				<dl className='desc_list'>
					<dt className='tit'>경력</dt>
					<dd className='cont'>엔테크 서비스 / UI 개발실</dd>
					<dd className='cont'>
						<dl className='task_list'>
							<dt className='tit'>
								<a href="https://wav.media/" className='link'>WAV Media</a>
							</dt>
							<dd className='cont'>2019.04 ~ 2019.08</dd>
							<dd className='cont'>기여도: 100%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										신규 홈 UI 개발
									</li>
									<li className='item'>
										이메일 템플릿 제작 지원
									</li>
									<li className='item'>
										유지보수
									</li>
								</ul>
							</dd>
						</dl>
						<dl className='task_list'>
							<dt className='tit'>
								<a href="https://whale.naver.com/" className='link'>네이버 웨일</a>
							</dt>
							<dd className='cont'>2019.04</dd>
							<dd className='cont'>기여도: 100%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										이벤트 페이지 UI 개발
									</li>
								</ul>
							</dd>
						</dl>
						<dl className='task_list'>
							<dt className='tit'>
								<a href="https://m.land.naver.com/" className='link'>네이버 부동산</a>
							</dt>
							<dd className='cont'>2019.06</dd>
							<dd className='cont'>기여도: 100%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										모바일 홈 UI 개선
									</li>
								</ul>
							</dd>
						</dl>
						<dl className='task_list'>
							<dt className='tit'>
								<a href="https://open-pro.dict.naver.com/_ivo/home" className='link'>오픈사전PRO</a>
							</dt>
							<dd className='cont'>2019.10 ~ 2020.01</dd>
							<dd className='cont'>기여도: 50%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										모바일 버전 개편 UI 개발 (Vue.js)
									</li>
									<li className='item'>
										유지보수
									</li>
								</ul>
							</dd>

							<dd className='cont'>2020.09 ~ 2021.06</dd>
							<dd className='cont'>기여도: 100%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										PC/모바일 통합 개편 UI 개발 (Nuxt.js)
									</li>
									<li className='item'>
										유지보수
									</li>
								</ul>
							</dd>



						</dl>
						<dl className='task_list'>
							<dt className='tit'>
								<a href="https://wquiz.dict.naver.com/main.dict" className='link'>네이버 퀴즈</a>
							</dt>
							<dd className='cont'>2020.07 ~ 2020.12</dd>
							<dd className='cont'>기여도: 100%</dd>
							<dd className='cont'>
								<ul className='cont_list'>
									<li className='item'>
										오늘의 단어/퀴즈 UI 개발
									</li>
									<li className='item'>
										오늘의 NEWS&퀴즈 및 신문 방송 퀴즈 UI 개발
									</li>
									<li className='item'>
										영어퀴즈 메인 페이지 개편 UI 개발
									</li>
									<li className='item'>
										gnb 디자인 개편 UI 개발
									</li>
									<li className='item'>
										유지보수
									</li>
								</ul>
							</dd>
						</dl>

					</dd>
				</dl>
			</div>
		</div>
	);
}

export default Index;