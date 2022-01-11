import {Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
