import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import BooksByGenrePage from './pages/BooksByGenrePage/BooksByGenrePage';
import GenrePage from './pages/GenrePage/GenrePage';
import './styles/styles.scss';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/genre" exact component={GenrePage}/>
          <Route path="/genre/:genreName" component={BooksByGenrePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
