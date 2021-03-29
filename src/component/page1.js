import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

require('dotenv').config();
class Page1 extends Component{
    constructor() {
        super();
    }
    render(){

        return(
            <div>
                <h1>Page 1</h1>
            </div>

        )
    }
}export default withRouter(Page1);