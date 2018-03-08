import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import InfoCard from './components/info-card';
import NavBar from './components/navbar';
import RegistrationForm from './components/registration-form';
import Root from './components/root';
import ViewContainer from './components/view-container';

class App extends React.Component {

    render() {

        return (

            <Router>
                <Root>
                    <NavBar/>
                    <ViewContainer>
                        <Route exact={true} path="/" component={InfoCard}/>
                        <Route exact={true} path="/register" component={RegistrationForm}/>
                    </ViewContainer>
                </Root>
            </Router>

        );

    }

}

ReactDOM.render(<App/>, document.getElementById('root'));