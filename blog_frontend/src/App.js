import React from "react"
import {Provider as ReduxProvider} from "react-redux"
import Blog from "./Components/Blog";
import configureStore from "./redux/posts/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


export default class App extends React.Component {
    render() {
        return (
            <ReduxProvider store={reduxStore}>
                <div className="App">
                    <Blog />
                </div>
            </ReduxProvider>
        );
    }
}
