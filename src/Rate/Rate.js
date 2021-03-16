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
        this.currency = ["USD", "EUR", "RUR", "BTC"]
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {

                return data.json()
            })
            .then(data => {
                let result = {}
                data.map((elem, i) => {
                    if (elem.ccy === this.currency[i]) {
                        result.[elem.ccy] = {"buy": elem.buy, "sale": elem.sale}
                    }
                    return result
                })
                this.setState({currencyRate: result})
            })
    }

    render() {
        return (
            <div className="content w-75 m-auto bg-white pb-2 pt-4 h-75">
                <div className="row w-100 text-start p-2">
                    <h5> PRIVATBANK Сurrency Exchange {this.state.date} </h5>
                </div>
                <div className="row w-100 m-auto h-25">
                    {(this.state.currencyRate.EUR) ?
                        Object.keys(this.state.currencyRate).map((key) =>
                            (
                                <div className="currency col border border-dark h-100 m-4 mt-1" key={key}>
                                    <div className="h-50 text-center fs-5 fw-bold pt-1">{key}</div>
                                    <div className="h-25 text-end fs-5">
                                        Buy : <span className="fw-bold"> {Number(this.state.currencyRate[key].buy).toFixed(2)} </span> UAN
                                    </div>
                                    <div className="h-25 text-end fs-5">
                                        Sale : <span className="fw-bold"> {Number(this.state.currencyRate[key].buy).toFixed(2)} </span> UAN
                                    </div>
                                </div>
                            )
                        ) : ''}
                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        );
    }
}

export default Rate;
