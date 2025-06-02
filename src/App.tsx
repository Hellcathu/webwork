import './App.css';

function App() {
  const images = [
    { src: '/give.jpg', description: '朋友間最好的贈禮' },
    { src: '/listen.jpg', description: '我傾聽他的味道' },
    { src: '/pray.jpg', description: '神啊 他是我月底的救星星' },
    { src: '/shock.jpg', description: 'Oh my godo, is 蠟燭泡麵' },
    { src: '/throwball.jpg', description: '百投百中!' },
  ];

  return (
    <div className="container">
      <div className="header-overlay">
       <img src="/container.jpg" className="header-image" />
       <video
          src="/groupvid.mp4"
          className="header-video"
          muted
          loop
          autoPlay
          playsInline
        />
       
   
       <a 
        href="https://www.youtube.com/watch?v=k_pjkGfJ_R0&t=1s" 
        target="_blank" 
        rel="noopener noreferrer"
        className="header-title-block"
       > 
        <div className="main-title">實現心願？蠟燭泡麵!</div>
        <div className="sub-title">（詳情請點擊標題）</div>
      </a>
    </div>

    <div className="image-row">
      {images.map((img, idx) => (
        <div className="image-cell" key={idx}>
          <img src={img.src} className="image" />
          <div className="description">{img.description}</div>
        </div>
      ))}
    </div>
  </div>

  );
}

export default App;


