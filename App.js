// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import LandingPage from './components/LandingPage';
// import OverlayOptions from './components/OverlayOptions';
// import VideoPlayer from './components/VideoPlayer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import OverlayOptions from './components/OverlayOptions';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src='play.png' alt='logo'/>
  {/* <img src="play.png" alt="Logo" /> */}
  <h1>My Live Stream App</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/overlay">Overlay</a></li>
      {/* Add more navigation links as needed */}
    </ul>
  </nav>
</header>

     
      <main>
        <OverlayOptions/>
        <LandingPage />
        {/* Add other components like OverlayOptions and VideoPlayer */}
      </main>
      <footer>
  &copy; 2023 Your Company Name. All rights reserved.
</footer>

    </div>
  );
}

export default App;

