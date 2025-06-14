import '../App.css';

function Intro() {
  const handleStartClick = () => {
    window.open('/home', '_blank'); 
  };

  return (
    <div className="app">
      <section className="intro-section">
        <h2 className="cute-title">🐣 파닉스, 무엇부터 시작할까요?</h2>
        <p className="intro-text">
          파닉스는 <strong>‘글자의 이름’이 아닌 ‘소리’를 배우는 공부</strong>예요.<br />
          아이가 영어 단어를 <strong>스스로 읽고 말할 수 있도록</strong> 돕는 첫걸음!<br />
          아래 4단계를 따라 천천히 시작해볼까요? 😊
        </p>

        <div className="step-cards">
          <div className="step-card step-blue">
            <div className="emoji">🔤</div>
            <h3>Step 1</h3>
            <p><strong>Alphabet 소리 익히기</strong></p>
            <p className="step-desc">
              A는 “에이”가 아니라 <strong>/æ/</strong>!<br />
              알파벳이 실제로 내는 <strong>진짜 소리</strong>부터 배우며 시작해요.
            </p>
          </div>

          <div className="step-card step-pink">
            <div className="emoji">🍎</div>
            <h3>Step 2</h3>
            <p><strong>Short Vowel 소리 구분하기</strong></p>
            <p className="step-desc">
              a, e, i, o, u는 짧고 또렷한 소리!<br />
              예: <strong>a → /æ/, i → /ɪ/</strong><br />
              단어를 <strong>천천히 읽는 연습</strong>을 해요.
            </p>
          </div>

          <div className="step-card step-orange">
            <div className="emoji">🎵</div>
            <h3>Step 3</h3>
            <p><strong>Long Vowel 정확하게 발음하기</strong></p>
            <p className="step-desc">
              알파벳 이름처럼 들리는 긴 소리예요.<br />
              예: <strong>a → /eɪ/, i → /aɪ/</strong><br />
              <strong>Short Vowel과 구분</strong>하며 정확하게 읽어요.
            </p>
          </div>

          <div className="step-card step-yellow">
            <div className="emoji">🔗</div>
            <h3>Step 4</h3>
            <p><strong>Blending을 통해 단어 읽기</strong></p>
            <p className="step-desc">
              bl, st, gr처럼 자음이 <strong>연결된 소리</strong>를 익혀요.<br />
              단어 전체를 <strong>부드럽게 읽는 힘</strong>을 키워요!
            </p>
          </div>
        </div>

        <button className="start-button" onClick={handleStartClick}>
          🎉 파닉스 첫걸음 시작하기
        </button>
      </section>
    </div>
  );
}

export default Intro;
