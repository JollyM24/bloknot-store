import './App.css';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import NoteBlock from './components/NoteBlock';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
        </div>
        <h2 className="content__title">All notebooks</h2>
        <div className="content__items">
          <NoteBlock />
          <NoteBlock />
          <NoteBlock />
          <NoteBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
