import './App.css';
import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";

class App extends Component {

    render(){
        return(
            <Switch>
                <Route path="/Page1">
                    <Page1 />
                </Route>
                <Route path="/Page2">
                    <Page2 />
                </Route>
                <Route path="/Page3">
                    <Page3 />
                </Route>
            </Switch>
        )
    }
}
export default App;
