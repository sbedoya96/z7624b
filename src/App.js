import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Navigation } from './Components/Nav';
import { Profile } from './PageComponents/Profile';
function App() {
    return (
        <React.Fragment>
          <Navigation/>
            <Router>
              <Route exact path="/profile" component={Profile} />
            </Router>
        </React.Fragment>

    );
}

export default App;
