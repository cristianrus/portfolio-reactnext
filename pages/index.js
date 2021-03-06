import React from 'react';
import Typed from 'react-typed'
import BaseLayout from '../components/layouts/BaseLayouts';
import { Container, Button, Row, Col } from 'reactstrap';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.roles = ['Création site Internet', 'Website design UI - UX', 'Boutiques en ligne e-commerce', 'Applications Responsive Web Design',
            'React.js développement front-end',
            'Magento plateforme de vente en ligne', 'Drupal système de gestion de contenu',
            'React Native applications mobiles'];
    }

    render() {
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png" />
                    </div>

                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2 style={{textAlign: 'center'}}> Dévelopeur web freelance full stack</h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                                                </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.png"/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        Web design, création de site Internet mobile -
                                        responsive web design - e-commerce freelance à Paris : freelance-web.dev.
                                    </h1>
                                </div>
                                <Typed
                                    loop
                                    typeSpeed={60}
                                    backSpeed={60}
                                    strings={this.roles}
                                    smartBackspace
                                    shuffle={false}
                                    backDelay={1000}
                                    fadeOut={false}
                                    fadeOutDelay={100}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />
                                <div className="hero-welcome-bio">
                                    <h1>
                                        Découvrir nos développements web.
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>

        )
    }
}

export default Index
