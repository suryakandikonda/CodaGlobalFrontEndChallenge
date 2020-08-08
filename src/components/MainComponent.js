import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuDetailComponent from './MenuDetailComponent';
import HeaderSearchComponent from './HeaderSearchComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://starlord.hackerearth.com/recipe")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const MenuDetail = ({match}) => {
            return (
                <MenuDetailComponent dish={this.state.items} dishId={match.params.id} />
            );
        }

        const Home = () => {
            return (
                <HomeComponent dish={this.state.items} />
            );
        }
        const { error, isLoaded, items } = this.state;
            if(error) {
                return (<div style={{backgroundColor:'#ECEFF1'}}>Error: {error.message}</div>);
            } else if(!isLoaded) {
                return (
                    <div class="loadingio-spinner-eclipse-dsh2ogf2hlr" style={{backgroundColor:'#ECEFF1', width:"100%",display:'block', paddingLeft:'45%', marginTop:'200px'}}><div class="ldio-ohimyyfsxtp">
                    <div></div>
                    </div></div>
                );
            } else {
                return (
                    <React.Fragment>
                        <HeaderSearchComponent />
                        
                        <Switch>
                            <Route exact path='/menu' component={Home} />
                            <Route path='/menu/:id' component={MenuDetail} />
                            <Redirect to='/menu' />
                        </Switch>
                    </React.Fragment>
                );
            }
        
    }
}

export default MainComponent;