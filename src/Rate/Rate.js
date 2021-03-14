import React from "react";
import './Rate.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calc from "../Calc/Calc";

class Rate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "date": "",
            "currencyRate": {}
        }
        this.currency = ["USD", "RUB", "CAD", "PHP"]
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({date: data.date})
                let result = {}
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({currencyRate: result})
            })
    }

    render() {
        return (
            <div className="content w-75 m-auto bg-white pb-2 pt-4 h-75">
                <div className="row w-100 text-start p-2">
                    <h5> Сurrency exchange on {this.state.date} </h5>
                </div>
                <div className="row w-100 m-auto h-25">
                    {Object.keys(this.state.currencyRate).map((key) =>
                        (
                            <div className="currency col border border-dark h-100 m-4 mt-1" key={key}>
                                <div className="h-50 text-center fs-5 fw-bold pt-3">{key}</div>
                                <div className="h-25 text-end">
                                    {this.state.currencyRate[key].toFixed(2)}
                                </div>
                                <div className="h-25 text-end"> for 1 EUR</div>
                            </div>
                        )
                    )}
                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        );
    }
}

export default Rate;
