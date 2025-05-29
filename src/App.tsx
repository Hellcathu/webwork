// React + Vite 專案結構
// src/App.tsx

import './App.css';

function App() {
  const images = [
    { src: '/give.jpg', description: 'Description 1' },
    { src: '/listen.jpg', description: 'Description 2' },
    { src: '/pray.jpg', description: 'Description 3' },
    { src: '/shock.jpg', description: 'Description 4' },
    { src: '/throw.jpg', description: 'Description 5' },
  ];

  return (
    <div className="container">
      <div className="left-panel">
        <div className="section">
          <div className="title-box">My Portfolio</div>
        </div>
        <div className="section">
          {/* 可以放介紹文字 */}
        </div>
        <div className="section image-grid">
          {images.map((img, idx) => (
            <div className="image-cell" key={idx}>
              <img src={img.src} alt="" />
              <div className="description">{img.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-panel">
        {/* 背景是圖片 */}
      </div>
    </div>
  );
}

export default App;
