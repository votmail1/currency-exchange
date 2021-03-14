import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import Footer from "./Footer/Footer";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="container-sm vh-100 min-vw-100 m-0">
                    <Header/>
                    <Rate/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
