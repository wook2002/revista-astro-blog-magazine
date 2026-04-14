import React from 'react'
import { SITE_INFO } from './siteConfig' // 설정 파일 불러오기

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      {SITE_INFO.navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="page-link">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links
