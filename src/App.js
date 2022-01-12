import {Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/classes' component={Classes} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
