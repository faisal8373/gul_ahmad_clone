import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import LogoBar from './components/header/LogoBar';
import TopBar from './components/header/TopBar';
import CategoriesBar from './components/categories/CategoriesBar';
import Slider from './components/slider/Slider';
import SingleCategory from './components/categories/SingleCategory';

function App() {
  return (
    <div className="App">
  <TopBar />
  <LogoBar />
  <CategoriesBar />
  <Slider />
<SingleCategory />
 
    </div>
  );
}

export default App;
