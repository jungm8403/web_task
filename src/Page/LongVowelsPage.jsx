import React from "react";
import "../Css/LongVowelsPage.css";
import "../Css/SharedBox.css";
import Navbar from "./Navbar";

export default function LongVowelsPage() {
  const vowels = [
    { letter: "A", description: "cake, rain", firstWord: "cake" },
    { letter: "E", description: "bee, feet", firstWord: "bee" },
    { letter: "I", description: "bike, time", firstWord: "bike" },
    { letter: "O", description: "go, rope", firstWord: "go" },
    { letter: "U", description: "cube, flute", firstWord: "cube" },
  ];

  const bgColors = ["#E1F5FE", "#FFF9C4", "#E8F5E9", "#F3E5F5", "#FFE0B2"]; // ✅ 카드 배경색

  return (
    <>
      <Navbar />
      <div
        className="long-vowels-wrapper"
        style={{
          minHeight: "100vh",
          padding: "2rem",
          marginTop: "-1rem", // ✅ 배너 간격 조정
          fontFamily: "'Comic Sans MS', sans-serif",
        }}
      >
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
              Long Vowels
            </h1>
            <h3
              style={{
                fontFamily: "'Comic Sans MS', sans-serif",
                fontSize: "1.1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Long Vowel은 영어 모음(A, E, I, O, U)가 자기 알파벳 이름처럼 길게 발음되는 경우입니다.
              <br />
              롱 바울은 짧고 빠르게 발음되는 숏 바울과 달리, 입을 크게 벌리거나 소리를 길게 유지하며 발음하는 것이 특징입니다.
            </h3>
          </div>
        </header>

        <div className="vowel-box-grid">
          {vowels.map((vowel, index) => {
            const bgColor = bgColors[index % bgColors.length];

            return (
              <div
                key={vowel.letter}
                className="shared-box"
                style={{
                  backgroundColor: bgColor, // ✅ 밝은 카드 배경 적용
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="shared-title">{vowel.letter}</span>
                <div className="shared-desc">
                  <p>{vowel.description}</p>
                  <a
                    href={`/long-vowels/long-${vowel.letter.toLowerCase()}/${vowel.firstWord}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="shared-btn"
                      style={{
                        backgroundColor: "#87cefa", // ✅ Alphabet 스타일 버튼 색상
                        color: "#000",
                        border: "none",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "10px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      학습하기
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", color: "#aaa" }}>
          📚 파닉스 교육용 웹사이트
        </div>
      </div>
    </>
  );
}
