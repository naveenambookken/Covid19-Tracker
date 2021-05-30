import React, { Component } from 'react'
import Axios from 'axios'
import {Accordion,Card,Button} from 'react-bootstrap'

class Statedata extends Component {
    constructor(){
        super();
        this.state={
            stateData: {},
            
        }
    }
    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json")
        .then(response=>this.setState({stateData:response.data}));
    }

    render() {
        let keys = Object.keys(this.state.stateData);
        return (
            
                <div className="row">
                    <div className="col-md-12">
                   
                   <Accordion>                        
                        {
                            keys.map((itm,k)=>{ 
                                let districts= this.state.stateData[itm].districtData;
                                
                                
                                let total_active= 0;
                                let total_confirmed= 0;
                                let total_death= 0;
                                let total_recover= 0; 
                                let district_list=[];

                                for(let x in districts){
                                    total_active += districts[x].active;
                                    total_confirmed += districts[x].confirmed;
                                    total_recover += districts[x].recovered;
                                    total_death += districts[x].deceased;
                                    let ob = districts[x];
                                    ob["district_name"]=x;
                                    district_list.push(ob);
                                }
                                //console.log(district_list);
                                
                                return(
                                    <Card>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                                            {itm} -<span className="btn-dark p-1 mr-2"> Total Cases {total_confirmed}</span> <span className="btn-dark p-1 mr-2">  Active {total_active}</span><span className="btn-dark p-1 mr-2">  Recovered {total_recover}</span><span className="btn-dark p-1 mr-2">  Deaths {total_death}</span>
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={k}>
                                        <Card.Body>
                                            <table className ="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <td>District</td>
                                                        <td>Confirmed</td>
                                                        <td>Active</td>
                                                        <td>Recovered</td>
                                                        <td>Deaths</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        district_list.map((itm,ky)=>{
                                                            return(
                                                                
                                                                
                                                                
                                                                <tr>
                                                                    <td>{itm.district_name}</td>
                                                                    <td>{itm.confirmed}</td>
                                                                    <td>{itm.active}</td>
                                                                    <td>{itm.recovered}</td>
                                                                    <td>{itm.deceased}</td>

                                                                </tr>

                                                            )
                                                            
                                                        })
                                                        
                                                    }
                                                </tbody>
                                            </table>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )

                                
                            })
                        }
                        
                        
                        </Accordion>
                    </div>
                </div>
                

            )
    }
}
export default Statedata