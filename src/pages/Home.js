import logo from '../assets/logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Work in progress.
        </p>
      </header>
    </div>
  );
}

export default Home;
