import React, {Component} from 'react';
import { Form, Button } from "react-bootstrap";
import { withRouter} from 'react-router-dom';
import { Range } from 'rc-slider';
import './se.css';
import Persons from "./persons";



// class Result extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = { is_liked: false };
//
//         this.isLiked = this.isLiked.bind(this);
//         this.like = this.like.bind(this);
//     }
//
//     toRad(Value) {
//         return Value * Math.PI / 180;
//     }
//
//     componentDidMount() {
//         this.isLiked();
//     }
//
//     async isLiked() {
//         this.setState({ is_liked: this.props.data.is_liked });
//     }
//
//     like() {
//         fetch(`${Config.host}:${Config.ports.server}/profile/like`, {
//             "method": "POST",
//             "headers": {
//                 "Content-Type": "application/json"
//             },
//             "credentials": "include",
//             "body": JSON.stringify({ "target_id": this.props.data.id })
//         }).then(response => {
//             return response.json();
//         }).then(json => {
//             if (json.status === 200) {
//                 message("success", json.message);
//                 this.setState({ is_liked: this.state.is_liked ? false : true });
//             }
//             else {
//                 message("error", json.message);
//             }
//         });
//     }
//
//     getDistance() {
//         let lat1 = this.props.data.latitude;
//         let lon1 = this.props.data.longitude;
//         let lat2 = this.props.latitude;
//         let lon2 = this.props.longitude;
//         let R = 6371; // km
//         let dLat = this.toRad(lat2 - lat1);
//         let dLon = this.toRad(lon2 - lon1);
//         lat1 = this.toRad(lat1);
//         lat2 = this.toRad(lat2);
//
//         let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
//         let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         let d = R * c;
//         return Math.round(d * 10) / 10;
//     }
//
//     render() {
//
//         let _NAME = `${this.props.data.firstname} ${this.props.data.lastname}`;
//         let _AGE = moment().diff(this.props.data.date_of_birth, "YEARS");
//         let _DISTANCE = this.getDistance();
//         let _IMAGE = this.props.data.images[0] ? this.props.data.images[0].image : Config.default_profile_picture;
//         let _INTERESTS = this.props.data.interests.slice(0, 3).join(", ");
//         return (
//             <Col style={{ "marginTop": "2rem", "marginBottom": "2rem", "maxWidth": "22rem", "minWidth": "15rem" }}>
//                 <Card style={{ "height": "50%" }} bg="light" border="secondary">
//                     <Card.Img className="card-sugg-img" variant="top" src={_IMAGE} height="50%" />
//                     <Card.Body>
// 						<span onClick={() => this.props.history.push(`/profile/${this.props.data.id}`)} style={{ textDecoration: "none" }}>
// 							<Card.Title className="clickable">{_NAME}, {_AGE}</Card.Title>
// 						</span>
//                         <Card.Subtitle className="mb-2 text-muted"><i>{_DISTANCE} kilometers away from you</i></Card.Subtitle>
//                         <Card.Text>
//                             {_INTERESTS}
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                         <center>
//                             <small className="text-muted"><Button variant="danger" size="lg" onClick={this.like}>🖤 {this.state.is_liked ? "Unlike" : "Like"}</Button></small>
//                         </center>
//                     </Card.Footer>
//                 </Card>
//             </Col>
//         );
//     }
// }



class Results extends Component {
    render() {
        return (
            <div className="m-4 flex-div flex-wrap">
                test
                {/*{*/}
                {/*    this.props.results.map((result, index) => (*/}
                {/*        <Result data={result} key={index} history={this.props.history}*/}
                {/*                latitude={this.props.latitude} longitude={this.props.longitude} />*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        );
    }
}



class Se extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "results": null,
            "latitude": null,
            "longitude": null,
            "distance": {
                "min": 0,
                "max": 100
            },
            "age": {
                "min": 18,
                "max": 100
            },
            "popularity": {
                "min": 0,
                "max": 1000
            },
            "interests": []
        }
        this.updateDistance = this.updateDistance.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updatePopularity = this.updatePopularity.bind(this);
    }

    filterByAge(){

    }
    filterByLocation(){

    }
    filterByPopularity(){

    }
    filterByInterests(){

    }
    async updateInterests(){

    }

    async updateDistance(e) {
        await this.setState({
            "distance": {
                "min": e[0],
                "max": e[1]
            }
        });
    }

    async updateAge(e){
        await this.setState({
            "age": {
                "min": e[0],
                "max": e[1]
            }
        });
    }
    async updatePopularity(e){
        await this.setState({
            "popularity": {
                "min": e[0],
                "max": e[1]
            }
        });

    }
    search(){
        console.log('Search Clicked');
    }

    render()
        {
                return (
                    <div>
                        <div className="flex-div m-4">
                            <Button variant="danger" onClick={this.filterByAge}>Sort by age</Button>
                            <Button variant="danger" onClick={this.filterByLocation}>Sort by location</Button>
                            <Button variant="danger" onClick={this.filterByPopularity}>Sort by popularity</Button>
                            <Button variant="danger" onClick={this.filterByInterests}>Sort by interests</Button>
                        </div>
                        <div className="form-group">
                            <Form className="flex-div flex-wrap m-5">
                                <Form.Control type="text" placeholder="Interests" name="interests"
                                              onChange={this.updateInterests} className="responsive-div col-md-4"/>
                                <div className="Range-group">
                                    <div className="m-auto">
                                        <span>{`Distance: min: ${this.state.distance.min} km, max: ${this.state.distance.max} km`}</span>
                                        <Range
                                            name="distance"
                                            allowCross={false}
                                            defaultValue={[this.state.distance.min, this.state.distance.max]}
                                            onChange={this.updateDistance}
                                            style={{minWidth: "5rem", maxWidth: "20rem"}}
                                            included={true}
                                        />
                                    </div>
                                    <div className="m-auto" style={{'display':'block'}}>
                                        <span>{`Age: min: ${this.state.age.min} y.o, max: ${this.state.age.max} y.o`}</span>
                                        <Range
                                            name="age"
                                            min={18}
                                            allowCross={false}
                                            defaultValue={[this.state.age.min, this.state.age.max]}
                                            onChange={this.updateAge}
                                            style={{minWidth: "5rem", maxWidth: "20rem"}}
                                            included={true}
                                        />
                                    </div>
                                    <div className="m-auto" style={{'display':'block'}}>
                                        <span>{`Popularity: min: ${this.state.popularity.min} pts, max: ${this.state.popularity.max} pts`}</span>
                                        <Range
                                            name="popularity"
                                            max={1000}
                                            allowCross={false}
                                            defaultValue={[this.state.popularity.min, this.state.popularity.max]}
                                            onChange={this.updatePopularity}
                                            style={{minWidth: "5rem", maxWidth: "20rem"}}
                                            step={50}
                                            included={true}
                                        />
                                    </div>
                                </div>
                                <Button variant="outline-success" className="mx-5" onClick={this.search}>Search</Button>
                            </Form>
                            <Persons />
                        </div>
                    </div>
                );
        }
}

 export default withRouter(Se);