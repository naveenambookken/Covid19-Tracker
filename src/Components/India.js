import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import Statedata from './Statedata'
import axios from 'axios'

export default class India extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india")
        .then(response=>{
            this.setState({data:response.data})
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/flat/64.png" alt=""/>
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-primary" style={{ width: '18rem' }}>
                                <Card.Body className="text-center"> 
                                    <Card.Title >Total Cases</Card.Title>
                                    <h1>{this.state.data.cases}</h1>
                                    <Card.Text>
                                    [Today : {this.state.data.todayCases}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                <Card.Body className="text-center"> 
                                    <Card.Title >Active Cases</Card.Title>
                                    <h1>{this.state.data.active}</h1>
                                    <Card.Text>
                                    
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                <Card.Body className="text-center"> 
                                    <Card.Title >Recovered</Card.Title>
                                    <h1>{this.state.data.recovered}</h1>
                                    <Card.Text>
                                    [Today : {this.state.data.todayRecovered}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                <Card.Body className="text-center"> 
                                    <Card.Title >Deaths</Card.Title>
                                    <h1>{this.state.data.deaths}</h1>
                                    <Card.Text>
                                    [Today : {this.state.data.todayDeaths}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>


                <div className="col-md-12">
                    <Statedata/>
                </div>


            </div>

        )
    }
}
