import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";

function AlphabetDetail() {
  const { letter } = useParams();
  const safeLetter = (letter || "").trim();
  const upper = safeLetter.toUpperCase();
  const lower = safeLetter.toLowerCase();

  // 🔧 public 경로에서 안전하게 불러오기
  const imageUrl = `${process.env.PUBLIC_URL}/images/alphabet/${lower}.png`;
  const soundUrl = `${process.env.PUBLIC_URL}/sounds/alphabet/${lower}.mp3`;

  const playSound = () => {
    const audio = new Audio(soundUrl);
    audio.play().catch((e) => {
      console.error("❌ 소리 재생 실패:", e);
    });
  };

  return (
    <>
      <Navbar />
      <div style={{
        fontFamily: '"Comic Sans MS", sans-serif',
        background: '#ffffff',
        minHeight: '100vh',
        padding: '3rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        {/* 알파벳 뱃지 */}
        <div style={{
          background: '#ffecb3',
          borderRadius: '50%',
          width: '160px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4.5rem',
          fontWeight: 'bold',
          color: '#ff7043',
          marginBottom: '2.5rem',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.12)'
        }}>
          {upper || "?"}
        </div>

        {/* 이미지 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '28px',
          padding: 0,
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '700px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {safeLetter ? (
            <img
              src={imageUrl}
              alt={`${letter} 이미지`}
              onError={(e) => {
                console.error(`❌ 이미지 로딩 실패: ${imageUrl}`);
                e.currentTarget.onerror = null;
                e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.png`; // 대체 이미지가 있을 경우
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '0'
              }}
            />
          ) : (
            <p style={{ color: '#888' }}>❗ 알파벳 정보를 불러오지 못했습니다.</p>
          )}
        </div>

        {/* 소리 재생 + 자료 다운로드 */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={playSound}
            style={{
              backgroundColor: '#aed581',
              border: 'none',
              padding: '0.7rem 1.4rem',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px rgba(0,0,0,0.1)'
            }}
          >
            🔊 소리 재생
          </button>

          <a
            href={`${process.env.PUBLIC_URL}/pdfs/${lower}.hwp`}
            download
            style={{
              backgroundColor: '#fff176',
              padding: '0.7rem 1.4rem',
              borderRadius: '10px',
              fontSize: '1rem',
              color: '#000',
              textDecoration: 'none',
              boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
              display: 'inline-block'
            }}
          >
            📄 한글 자료 받기
          </a>
        </div>

        {/* 설명 */}
        <p style={{
          fontSize: '1.6rem',
          marginBottom: '2rem',
          color: '#555'
        }}>
          This is the letter <strong>{upper}</strong>, pronounced as "<em>{lower}</em>".
        </p>

        {/* 닫기 버튼 */}
        <button
          onClick={() => window.close()}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          style={{
            backgroundColor: '#81d4fa',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '14px',
            cursor: 'pointer',
            boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease'
          }}
        >
          🏠 닫기
        </button>
      </div>
    </>
  );
}

export default AlphabetDetail;
