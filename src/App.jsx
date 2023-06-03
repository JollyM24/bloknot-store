import './App.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import NoteBlock from './components/NoteBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
        </div>

        <h2 className="content__title">All notebooks</h2>
        <NoteBlock />
      </div>
    </div>
  );
}

export default App;
