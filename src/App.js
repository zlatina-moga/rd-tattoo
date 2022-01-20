import {Route, Switch} from 'react-router-dom';

import { NotificationProvider } from './contexts/NotificationContext';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';
import Gallery from './components/Gallery/Gallery';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <NotificationProvider>
    <div className="App">
      <Navigation />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/classes' component={Classes} />
        <Route path='/gallery' component={Gallery} />
      </Switch>

      <Footer />
    </div>
    </NotificationProvider>
  );
}

export default App;
