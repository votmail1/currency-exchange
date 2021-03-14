import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="container footer bg-dark text-white min-vw-100 m-0">
                    <div className="row site-title w-75 m-auto">
                        <div className="col-sm text-start">
                            footer
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
