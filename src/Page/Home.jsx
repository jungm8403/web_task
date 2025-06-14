import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';

function Home() {
  const reviews = [
    {
      name: "김OO 학부모",
      text: "우리 아이가 알파벳을 쉽게 배웠어요! 재미있게 집중해서 하더라고요 😊",
    },
    {
      name: "이OO 학부모",
      text: "짧은 시간에도 큰 효과가 있네요. 소리와 철자 연결이 자연스러워졌어요!",
    },
    {
      name: "박OO 학부모",
      text: "아이도 재밌어하고, 혼자서도 반복해서 학습하더라고요. 강추합니다!",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="app">
        <section className="hero">
          <div className="hero-text">
            <h2 className="main-title">
              Learn <span className="highlight-blue">English Sounds</span> with<br />
              <span className="highlight-yellow">Fun & Joy! 🎉</span>
            </h2>
            <div className="subtitle-box">
              <p>
                “아이들에게 영어 소리와 철자 간의 관계를<br />
                쉽고 재미있게 학습할 수 있는 파닉스 첫걸음!”
              </p>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/kid.png`}
              width="300"
              height="200"
              alt="아이 이미지"
            />
          </div>
        </section>

        <section className="features">
          <Link to="/alphabet" className="card blue">
            <img
              src={`${process.env.PUBLIC_URL}/images/Alphabet.png`}
              width="auto"
              alt="Alphabet Sounds"
            />
            <h3>Alphabet Sounds</h3>
            <p>각 알파벳에 맞는 단어와 활용!</p>
          </Link>

          <Link to="/short-vowels" className="card pink">
            <img
              src={`${process.env.PUBLIC_URL}/images/24.png`}
              width="auto"
              alt="Short Vowels"
            />
            <h3>Short Vowels</h3>
            <p>짧은 모음 소리들을 듣고 익혀봐요!</p>
          </Link>

          <Link to="/long-vowels" className="card orange">
            <img
              src="https://img.icons8.com/color/96/happy.png"
              alt="Long Vowels"
            />
            <h3>Long Vowels</h3>
            <p>"긴 모음 단어의 소리를 또렷하게 익혀요!"</p>
          </Link>

          <Link to="/blend-sounds" className="card yellow">
            <img
              src="https://img.icons8.com/color/96/megaphone.png"
              alt="Blending"
            />
            <h3>Blending</h3>
            <p>소리를 가볍게 이어 말하는 법</p>
          </Link>
        </section>

        <section className="parents">
          <h2>👨‍👩‍👧‍👦 학부모들의 이야기</h2>
          <p>“직접 경험한 생생한 변화, 학부모들의 진짜 후기”</p>
          <div className="testimonial-cards">
            {reviews.map((review, idx) => (
              <div key={idx} className="testimonial-card">
                <h4>🧑‍🎓 {review.name}</h4>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Phonics EDU | Contact: hello@phonics.com</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
