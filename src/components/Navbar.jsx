import React from 'react'
import { FaBars } from 'react-icons/fa'
import Links from '../constants/links'
// 1. 방금 만든 설정 파일 불러오기
import { SITE_INFO } from '../constants/siteConfig' 
import heart from '../assets/heart.png'
import logo from '../assets/logo.png'
import '../css/navbar.css'

const Navbar = ({ toggle }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <a href="/" className="nav-logo not-blue">
              {/* 로고 alt 텍스트에 사이트 이름 적용 */}
              <img src={logo.src} alt={`${SITE_INFO.title.main}${SITE_INFO.title.sub} 로고`} width="100" height="100" />
              <div className="logo-text">
                {/* 2. 하드코딩된 이름을 설정값으로 교체 */}
                <span className="nav-word-open">{SITE_INFO.title.main}</span>
                <span className="nav-word-ed">{SITE_INFO.title.sub}</span>
              </div>
            </a>

            <button
              className="toggle-btn"
              onClick={toggle}
              aria-label="Expand Menu"
            >
              <FaBars></FaBars>
            </button>
          </div>

          <Links styleClass="nav-links" />
          
          {/* 3. 오른쪽 버튼의 링크와 글자를 설정값으로 교체 */}
          <a
            className="support-us-link not-blue"
            target="_blank"
            rel="noreferrer noopener"
            href={SITE_INFO.navButton.url}
          >
            <img
              src={heart.src}
              alt=""
              className="support-heart"
              width="19"
              height="19"
            />
            {SITE_INFO.navButton.text}
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
