import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../Css/WordPage.css';

export default function WordTemplate() {
  const { vowel, word } = useParams();

  const blendWords = {
    'blend-l': ['black', 'clock', 'flag', 'glue', 'plant', 'slip'],
    'blend-r': ['brush', 'crab', 'drum', 'frog', 'grass', 'print', 'tree'],
    'blend-s': ['school', 'ski', 'smile', 'snow', 'spoon', 'stop', 'swim'],
  };

  const wordList = {
    'short-a': ['cat', 'hat', 'bat', 'jam', 'map', 'man'],
    'short-e': ['bed', 'pen', 'red', 'net', 'hen', 'leg'],
    'short-i': ['sit', 'pig', 'lip', 'fish', 'milk', 'kick'],
    'short-o': ['hot', 'dog', 'box', 'top', 'rock', 'sock'],
    'short-u': ['sun', 'cup', 'bus', 'mud', 'run', 'bug'],
    'long-a': ['cake', 'day', 'game', 'name', 'plane', 'rain'],
    'long-e': ['bee', 'feet', 'green', 'eat', 'sheep', 'teeth'],
    'long-i': ['bike', 'kite', 'light', 'line', 'slide', 'time'],
    'long-o': ['go', 'home', 'nose', 'rope', 'rose', 'stone'],
    'long-u': ['cube', 'cute', 'mule', 'flute', 'rule', 'tube'],
  };

  const isShort = vowel?.startsWith('short-');
  const isLong = vowel?.startsWith('long-');
  const isBlend = vowel?.startsWith('blend-');

  const basePath = isShort
    ? 'short-vowels'
    : isLong
    ? 'long-vowels'
    : 'blend-sounds';

  const filteredEntries = Object.entries(wordList).filter(([key]) =>
    isShort ? key.startsWith('short-') : isLong ? key.startsWith('long-') : false
  );

  // ✅ 경로 수정
  const imageUrl = `${process.env.PUBLIC_URL}/images/${vowel.toLowerCase()}/${word}.png`;
  const audioUrl = `${process.env.PUBLIC_URL}/audio/${vowel}/${word}.mp3`;
  const hwpUrl = isBlend
    ? `${process.env.PUBLIC_URL}/pdfs/${word}.hwp`
    : `${process.env.PUBLIC_URL}/hwpfiles/${vowel}/${word}.hwp`;

  return (
    <div className="shorta-page">
      <Navbar />

      <div className="shorta-layout">
        {/* 왼쪽 목차 */}
        <aside className="shorta-sidebar">
          {isBlend &&
            Object.entries(blendWords).map(([blendKey, words]) => (
              <div className="shorta-menu-block" key={blendKey}>
                <div className="shorta-vowel-menu">
                  <Link to={`/word/${blendKey}/${words[0]}`}>
                    {blendKey.toUpperCase()}
                  </Link>
                </div>
                <ul className="shorta-word-list">
                  {words.map((w) => (
                    <li key={w}>
                      <Link to={`/word/${blendKey}/${w}`}>
                        {w.charAt(0).toUpperCase() + w.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {!isBlend &&
            filteredEntries.map(([vowelKey, words]) => (
              <div className="shorta-menu-block" key={vowelKey}>
                <div className="shorta-vowel-menu">
                  <Link to={`/${basePath}/${vowelKey}/${words[0]}`}>
                    {vowelKey.replace('-', ' ').toUpperCase()}
                  </Link>
                </div>
                <ul className="shorta-word-list">
                  {words.map((w) => (
                    <li key={w}>
                      <Link to={`/${basePath}/${vowelKey}/${w}`}>
                        {w.charAt(0).toUpperCase() + w.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </aside>

        {/* 오른쪽 콘텐츠 */}
        <div className="shorta-content">
          <img
            src={imageUrl}
            alt={word}
            className="shorta-main-image"
            onError={(e) => {
              console.error(`❌ 이미지 로딩 실패: ${imageUrl}`);
              e.currentTarget.onerror = null;
              e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
            }}
          />

          <div className="shorta-word">
            {word && word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
          </div>

          {/* 상단 버튼 2개 */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button
              onClick={() => {
                const audio = new Audio(audioUrl);
                audio.play().catch((e) => console.error("❌ 오디오 재생 실패:", e));
              }}
              className="shorta-word-button shorta-sound-button"
            >
              🔊 소리 재생
            </button>

            <a
              href={hwpUrl}
              download
              style={{ textDecoration: 'none' }}
            >
              <button className="shorta-word-button shorta-download-button">
                📄 한글 자료 받기
              </button>
            </a>
          </div>

          {/* 하단 닫기 버튼 */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => window.close()}
              className="shorta-word-button"
              style={{ backgroundColor: '#81d4fa', color: 'white' }}
            >
              🏠 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
