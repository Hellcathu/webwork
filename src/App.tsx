import './App.css';

function App() {
  const images = [
    { src: '/give.jpg', description: 'Description 1' },
    { src: '/listen.jpg', description: 'Description 2' },
    { src: '/pray.jpg', description: 'Description 3' },
    { src: '/shock.jpg', description: 'Description 4' },
    { src: '/throwball.jpg', description: 'Description 5' },
  ];

  return (
    <div className="container">
      <div className="header-overlay">
       <img src="/background.jpg /" className="header-image" />
       <video
          src="/groupvid.mov /"
          className="header-video"
          muted
          loop
          autoPlay
          playsInline
        />
       
   
       <h1 className="header-title">My Portfolio</h1>
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


