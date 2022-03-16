import './App.css';
import Navigation from './components/Navigation';
import Recipes from './components/Recipes';
import Recipe_form from './components/Recipe_form';
import Title from './components/Title';


function App() {
  return ( 
    // what it is rendering:
  <> 
    <Title />
    <Navigation />
    <Recipe_form />
    <Recipes />
  </>
  );
}

export default App;
