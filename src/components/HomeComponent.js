import React, { Component } from 'react';
import { Container, Col, Row, Modal, ModalHeader } from 'reactstrap';
import Pizza from '../assests/Images/Img2.jpg';

import LoveIcon from '../assests/Icons/Icon feather-heart.png';
import ClockIcon from '../assests/Icons/Icon feather-clock.png';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: props.dish,
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }
   
    render() {
        

                const { error, isLoaded, items } = this.state;
                return (
                    <React.Fragment>
                        <div className="HomeMainDiv">
                        <Container>
                            <div className="HomeTitle">
                            
                                <p>CATEGORY</p><br/><br/>
                                <h2><strong>Pizzas {'&'} Noodles</strong></h2>
                            </div>
    
                            <div className="HomeMenuDiv">
                                
                                    <Row>
                                        {items.map(item => (
                                            
                                            <React.Fragment>
                                                <Col sm="3">
                                                    <div className="HomeCardHero" style={{backgroundImage: "url('"+ item.image +"')"}}>
                                                        <React.Fragment>
                                                            <div className="HomeCategory"><p>In {item.category}</p></div>
                                                            <div className="HomeCardHeroText">
                                                                <Row>
                                                                    <Col xs="8">
                                                                        <h6>{item.name}</h6>
                                                                        
                                                                    </Col>
        
                                                                    <Col xs>
                                                                        <img src={LoveIcon} />
                                                                    </Col>
                                                                </Row>
                                                                <div>
                                                                    <img src={ClockIcon} style={{float:'left'}}/>
                                                                    <p style={{float:'left', marginLeft: '10px', marginTop:'3px'}}>24 min</p>
                                                                </div>
                                                                <p style={{marginTop:'34px'}}>{item.description}</p>
                                                            </div>
                                                        </React.Fragment>
                                                        <div class="overlay">
                                                            <div class="text">
                                                                <div>
                                                                    <Link to={`/menu/${item.id}`} style={{textDecoration:'none'}} id="Linkk">
                                                                        <h5>View more</h5>
                                                                    </Link>
                                                                    
                                                                        
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    
                                                </Col>

                                                
                                            </React.Fragment>

                                            
                                                
                                            
                                            
                                        
                                        ))}
                                    </Row>
    
                                    
                                
                            </div>
                            
                        </Container>
                        
                    </div> 
                        
                    </React.Fragment>
                );
            }
}

export default HomeComponent;