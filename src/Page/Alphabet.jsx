import React from "react";
import Navbar from "./Navbar";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const bgColors = [
  '#FFEBEE', '#E3F2FD', '#E8F5E9', '#FFFDE7', '#F3E5F5',
  '#E1F5FE', '#FBE9E7', '#E0F2F1', '#FFF3E0', '#F9FBE7',
  '#E8EAF6', '#FCE4EC', '#F1F8E9', '#ECEFF1', '#FFF8E1',
  '#EDE7F6', '#FFFDE7', '#E0F7FA', '#F0F4C3', '#F8BBD0',
  '#FFF9C4', '#E1F5FE', '#E0F2F1', '#FCE4EC', '#E3F2FD',
  '#F5F5F5'
];


function Alphabet() {
  return (
    <>
      <Navbar />
      <div style={{
        padding: '2rem',
        fontFamily: "'Comic Sans MS', sans-serif",
        marginTop: '-1rem',
        background: '#f4f4f4',
        minHeight: '100vh',
      }}>

        {/* ✅ ShortVowelsPage 스타일과 동일한 설명 영역 */}
        <header
          className="header-area"
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            marginTop: "0.5rem",
          }}
        >
          <div className="logo-text">
            <h1
              style={{
                fontFamily: "'Baloo 2', 'Comic Sans MS', cursive",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#ff7043",
              }}
            >
              Alphabet Sounds
            </h1>
            <h3
              style={{
                fontSize: "1.1rem",
                fontFamily: "'Comic Sans MS', sans-serif",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Alphabet은 파닉스의 출발점이에요!<br />
              알파벳 버튼을 눌러 소리를 듣고 귀여운 그림과 함께 학습해보세요.
            </h3>
          </div>
        </header>

        {/* 카드 그리드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {letters.map((letter, index) => {
            const bgColor = bgColors[index % bgColors.length];
            const lower = letter.toLowerCase();

            return (
              <div
                key={letter}
                style={{
                  border: '2px solid #87cefa',
                  borderRadius: '20px',
                  padding: '1rem',
                  backgroundColor: bgColor,
                  boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '220px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.2rem' }}>
                  {letter} <span style={{ fontSize: '1.3rem', color: '#666' }}>{lower}</span>
                </div>

                <button
                  onClick={() => window.open(`/alphabet/${lower}`, '_blank', 'noopener,noreferrer')}
                  style={{
                    backgroundColor: '#87cefa',
                    color: '#000',
                    fontFamily: "'Comic Sans MS', sans-serif",
                    fontSize: '1rem',
                    border: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  학습하기
                </button>
              </div>
            );
          })}
        </div>

        {/* 하단 여백 */}
        <div style={{ marginTop: '3rem', textAlign: 'center', color: '#aaa' }}>
          📚 파닉스 교육용 웹사이트
        </div>
      </div>
    </>
  );
}

export default Alphabet; 