import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import LogoBar from './components/header/LogoBar';
import TopBar from './components/header/TopBar';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App">
  <TopBar />
  <LogoBar />
  <Categories />
    </div>
  );
}

export default App;
