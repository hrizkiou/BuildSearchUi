import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";
import Header from "./component/header";
// import Search from "./component/search";
import Se from "./component/se";
import Slide from "./component/slide";

export default function BasicExample() {

    return (
        <div>
            <Header />
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Page1 />
                        </Route>
                        <Route exact path="/Page1">
                            <Page1 />
                        </Route>
                        <Route path="/Page2">
                            <Page2 />
                        </Route>
                        <Route path="/Page3">
                            <Page3 />
                        </Route>
                        <Route path="/Se">
                            <Se />
                        </Route>
                        <Route path="/Slide">
                            <Slide />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
