import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component {

    render() {
        return (
            <div className="container header text-white min-vw-100 m-0">
                <div className="row top-title align-bottom m-auto "/>
                <div className="row site-title align-bottom m-auto ">
                    <div className="col-sm text-start d-inline align-bottom fs-2">
                        Currency Exchange
                    </div>
                </div>
                {/*<div className="row menu m-auto">*/}
                {/*    <nav className="navbar navbar-expand-lg navbar-dark">*/}
                {/*        <div className="navbar-nav">*/}
                {/*            <a className="nav-link active" aria-current="page" href="#">Главная</a>*/}
                {/*            <a className="nav-link" href="#">Рекомендуемые</a>*/}
                {/*            <a className="nav-link" href="#">Цена</a>*/}
                {/*        </div>*/}
                {/*    </nav>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Header;
