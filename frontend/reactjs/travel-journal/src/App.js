import './App.css';
import Navbar from './component/Navbar';
import Story from './component/StoryCard';
import Data from './component/StoryData';

function App() {
  const storyElement = Data.map(data => {
    return (
      <div className="App">
        <Story
          key={data.id}
          data={data}
        />
      </div>
    );
  })
  return (
    <div>
      <Navbar />
      {storyElement}
    </div>
  )
}

export default App;
