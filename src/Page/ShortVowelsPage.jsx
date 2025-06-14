import React from "react";
import "../Css/ShortVowelsPage.css";
import "../Css/SharedBox.css";
import Navbar from "./Navbar";

export default function ShortVowelsPage() {
  const vowels = [
    { letter: "A", description: "cat, map", firstWord: "cat" },
    { letter: "E", description: "bed, pen", firstWord: "bed" },
    { letter: "I", description: "pig, sit", firstWord: "pig" },
    { letter: "O", description: "dog, pot", firstWord: "dog" },
    { letter: "U", description: "sun, cup", firstWord: "sun" },
  ];

  const bgColors = ["#FFF9C4", "#E1F5FE", "#F3E5F5", "#E8F5E9", "#FFE0B2"];

  return (
    <>
      <Navbar />
      <div
        className="short-vowels-wrapper"
        style={{
          minHeight: "100vh",
          padding: "2rem",
          marginTop: "-1rem",
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
              Short Vowels
            </h1>
            <h3
              style={{
                fontSize: "1.1rem",
                fontFamily: "'Comic Sans MS', sans-serif",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Short Vowel은 영어에서 모음(A, E, I, O, U)이 짧고 간단한 소리로 발음되는 경우를 말합니다.
              <br />
              알파벳 이름처럼 길게 발음하지 않고, 입을 짧게 닫거나 작게 열면서 나는 소리가 특징입니다.
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
                  backgroundColor: bgColor,
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="shared-title">{vowel.letter}</span>
                <div className="shared-desc">
                  <p>{vowel.description}</p>
                  <a
                    href={`/short-vowels/short-${vowel.letter.toLowerCase()}/${vowel.firstWord}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="shared-btn"
                      style={{
                        backgroundColor: "#87cefa",
                        color: "#000",
                        border: "none",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "10px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                        transition: "background-color 0.2s ease",
                      }}
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
