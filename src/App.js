
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {

    render() {
        return (
           <MuiThemeProvider >
            <div className="App">
                
                <div>
                   
                        {this.props.children}
                        
                </div>

            </div>
            </MuiThemeProvider>
        );
    }

}
export default App;
