import React from "react";
import "../Css/BlendSounds.css";
import "../Css/SharedBox.css";
import Navbar from "./Navbar";

export default function BlendSoundsPage() {
  const blends = [
    {
      title: "L-Blends",
      sounds: "bl, cl, fl, gl, pl, sl",
      type: "blend-l",
      firstWord: "glue",
    },
    {
      title: "R-Blends",
      sounds: "br, cr, dr, fr, gr, pr, tr",
      type: "blend-r",
      firstWord: "frog",
    },
    {
      title: "S-Blends",
      sounds: "sc, sk, sm, sn, sp, st, sw",
      type: "blend-s",
      firstWord: "school",
    },
  ];

  const bgColors = ["#E1F5FE", "#FFF9C4", "#F8BBD0"]; // ✅ 카드 배경색

  return (
    <>
      <Navbar />
      <div
        className="blend-wrapper"
        style={{
          minHeight: "100vh",
          padding: "2rem",
          marginTop: "-1rem", // ✅ 배너 간격 맞춤
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
              Blend Sounds
            </h1>
            <h3
              style={{
                fontFamily: "'Comic Sans MS', sans-serif",
                fontSize: "1.1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Blend Sound는 영어에서 두 개 이상의 자음이 나란히 붙어 있고, 각각의 소리가 모두 들리는 경우를 말합니다.
              <br />
              하나의 묶음처럼 보이지만 실제로는 두 자음을 또렷하게 구분해 발음하는 것이 특징입니다.
            </h3>
          </div>
        </header>

        <div className="blend-box-grid">
          {blends.map((blend, index) => {
            const bgColor = bgColors[index % bgColors.length];

            return (
              <div
                key={blend.type}
                className="shared-box"
                style={{
                  backgroundColor: bgColor, // ✅ 밝은 배경색
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="shared-title">{blend.title}</span>
                <div className="shared-desc">
                  <p>{blend.sounds}</p>

                  {/* ✅ Link → a 태그로 교체해서 새 탭에서 열리게 함 */}
                  <a
                    href={`/word/${blend.type}/${blend.firstWord}`}
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
