import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from './Components/SideNavigation';

function App() {
  return (
    <>
      <div id='home'>
        <h1>Nick Sachau</h1>
        <p>
          I'm <span className="typed">Developer</span> <span className="typed-cursor blink">|</span>
        </p>
      </div>
      <SideNavigation />
    </>
  );
}

export default App;
