import './App.css';
import Header from './component/header';
import Content from './component/content';
import SocialIcons from './component/icons';

function App() {
  return (
    <div className="card-container">
      <div className="card-item">
        <Header />
        <Content />
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;
