import React, { Component } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";

import PlayIcon from '../assests/Icons/Icon ionic-ios-play-circle.png';
import Star from '../assests/Icons/Icon awesome-star.png';
import LoveIcon from '../assests/Icons/Icon feather-heart.png';
import LoveIconRed from '../assests/Icons/Icon feather-heart-color.png';
import { Link } from 'react-router-dom';

class MenuDetailComponent extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            items: props.dish,
            id: props.dishId,
            fav: false
        };

        this.toggleImage = this.toggleImage.bind(this);

        
        
    }
    toggleImage = () => {
        this.setState({ fav: !this.state.fav})
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    
    render() {

        var DishName = this.state.items.filter(item => (item.id.toString() === this.state.id));
        console.log("Name: " + DishName);

        console.log("Dishes: " + (typeof this.state.id));
        const IngredientMatter = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus tempus. Quisque ac urna posuere, iaculis erat ornare, iaculis purus. Suspendisse lobortis consequat aliquam. Nulla lectus nulla, elementum at enim non, pharetra ultricies nisl. Nam ut sapien a arcu gravida fringilla. Duis nunc quam, volutpat et vulputate ac, interdum nec elit. Nunc venenatis consequat lectus, sed gravida eros ultrices eu.";
        const PrepareMatter = "Ut aliquet aliquam odio, hendrerit tincidunt tortor mollis consectetur. Ut pulvinar turpis ac ex bibendum, sed vehicula neque vestibulum. Nam sodales interdum sapien quis fringilla. Proin id lacus vitae leo aliquet blandit ac ac tortor. Donec quis turpis purus. In ac sodales mauris. Nullam ultricies ex vel diam aliquet, quis vulputate turpis congue.";
        return (
            
            <div className="DetailMainDiv">
                
                <Container>
                    <Row>
                        <Col sm>
                            <div className="DetailMiddleDiv">
                                <div className="DetailMiddleGobakDiv">
                                    <Link to='/menu' style={{color:'black', textDecoration: 'none'}}><h6><ion-icon name="arrow-back-outline"></ion-icon> Go back</h6></Link>
                                </div>
                                <div className="MiddleVideoHero" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('"+ DishName[0].image +"')"}}>
                                    <div className="MiddleVideoIcon">
                                        <img src={PlayIcon} />
                                    </div>
                                </div>

                                <div className="DetailsMiddleIngredients">
                                    <h5><strong>Ingredients :</strong></h5>
                                    <p>{IngredientMatter}</p>
                                </div>

                                <div className="DetailsMiddlePrepare">
                                    <h5><strong>How to prepare :</strong></h5>
                                    <p>{PrepareMatter}</p>
                                </div>
                            </div>
                        </Col>
    
                        <Col sm>
                        <Helmet>
                            <title>Recipe Details: {DishName[0].name}</title>
                        </Helmet>
                            <div className="DetailRightDiv">
                                <div className="DetailRecipeTitle">
                                    <h6 className="float-right">RECIPE</h6><br/><br/>
                                    <h3 className="float-right">{DishName[0].name}</h3>
                                </div><br/><br/>

                                <div className="DetailRightRatingDiv float-right">
                                    <p>4.5/5</p>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />

                                </div><br/><br/><br/>

                                <div className="DetailRightDescription">
                                    <h6 className="float-right">DESCRIPTION</h6><br/><br/>
                                    <p>{DishName[0].description}</p>
                                </div>

                                <div className="DetailRightCircleDiv">
                                    <h6 className="float-left">8<br/>ingredients</h6>
                                    <h6 className="float-left">{DishName[0].price}<br/>bucks</h6>
                                    <h6 className="float-left">25<br/>minutes</h6>
                                </div><br/><br/><br/><br/>

                                <div className="DetailRightFavDiv">
                                    <img src={this.state.fav? LoveIconRed: LoveIcon} className="float-right" onClick={this.toggleImage} />
                                    <h5 className="float-right">FAVORITE RECIPE</h5>
                                </div>
                                <br/><hr />

                                <div className="DetailRightFormDiv">
                                    <h6>ADD COMMENTS</h6>
                                    <textarea id="DetailsRightFormTextArea"
                                        rows="5" cols="50" placeholder="Type something here.."
                                    ></textarea>
                                    <button>ADD COMMENT</button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div class="separator"><h3>YOUR FOOD TASTES YUMMY</h3></div>
                </Container>
            </div>
        );
    }
}

export default MenuDetailComponent;