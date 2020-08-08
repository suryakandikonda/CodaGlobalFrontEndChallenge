import React, { Component } from 'react';

import SearchIcon from '../assests/Icons/Icon feather-search.png';
import { Container } from 'reactstrap';

class HeaderSearchComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="HeaderDiv">
                    <Container>
                        
                            <div className="HeaderSearchDiv">
                                <img src={SearchIcon} />
                                <input placeholder="Search your favorite recipe..." />
                               
                            </div>
                        
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderSearchComponent;