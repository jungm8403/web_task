import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* 🔘 우측 상단 매우 미니멀한 토글 버튼 */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1001
      }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'transparent',
            color: '#ccc',
            fontSize: '1.1rem',
            border: 'none',
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            opacity: 0.5,
            transition: 'opacity 0.2s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; }}
          title={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? '⌃' : '⌄'}
        </button>
      </div>

      {open && (
        <div className="main-nav">
          <div className="logo-area">
            <Link to="/home" className="logo-text">Phonics EDU</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/alphabet">Alphabet</Link></li>
            <li><Link to="/short-vowels">Short Vowels</Link></li>
            <li><Link to="/long-vowels">Long Vowels</Link></li>
            <li><Link to="/blend-sounds">Blend Sounds</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
