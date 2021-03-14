import React from "react"
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate}
    }

    calcRate = (e) => {
        e.preventDefault()
        let elem = e.target.elements
        let countCurrency = elem["count-currency"].value
        let typeCurrency = elem["type-currency"].value
        this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
    }

    render() {
        return (
            <div className="h-75 mt-4">
                <div className="row w-100 m-auto text-start mt-2">
                    <h5> Calculate </h5>
                </div>
                    <div className="calc border border-dark m-4 mt-1 h-75">
                        <div className="fs-5 fw-bold text-start p-4"> I want</div>
                        <div className="text-start">
                            <form className="p-4" onSubmit={this.calcRate}>
                                <input type="nymber" defaultValue="100" name="count-currency"/>
                                <select name="type-currency" id="">
                                    {Object.keys(this.props.rate).map((key) =>
                                        (
                                            <option value={key} key={key}>{key}</option>
                                        ))}
                                </select>
                                <input type="submit" defaultValue="calc"/>
                            </form>
                        </div>
                        <div className="text-start p-4">
                            <h4>Result</h4>
                            <ul className="calc-res">
                                <li>EUR {this.state.result}</li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Calc