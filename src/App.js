import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';
import Nav from './nav/Nav.js';
import data from './db.json';

export default function App(props) {
  const db = data.people;

  return (
    <div className="App">
      <Nav navigation={props.navigation} />
      <Header />
      <Article db={db} />
      <Footer />
    </div>
  );
}