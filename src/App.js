import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import LogoBar from './components/header/LogoBar';
import TopBar from './components/header/TopBar';
import CategoriesBar from './components/categories/CategoriesBar';
import Slider from './components/slider/Slider';
import SingleCategory from './components/categories/SingleCategory';
import BlogSlider from './components/blogSlider/BlogSlider';
import RatingSlider from './components/ratings/RatingSlider';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
  <TopBar />
  <LogoBar />
  <CategoriesBar />
  <Slider />
<SingleCategory />
<BlogSlider /> 
<RatingSlider />
<Subscribe />
<Footer />
    </div>
  );
}

export default App;
