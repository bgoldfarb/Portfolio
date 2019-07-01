import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories(){ 
        if(this.state.activeTab === 0){
            return(
                <div className= "projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#fff", height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    Fast YouTube
                    </CardTitle>
                    <CardText>
                        Implementation of YouTube with auto loading
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/bgoldfarb/FastYouTube">FastYouTube</a></Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share "/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#fff", height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    Social Scraper
                    </CardTitle>
                    <CardText>
                        React App to scrape Twitter to track social media involvement over time
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/bgoldfarb/FastYouTube">Social Scraper</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share "/>

                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#fff", height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    Geo Talk
                    </CardTitle>
                    <CardText>
                        React app that you can talk with people around you based on your location preferences
                        and has goole oauth and google maps 
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://geo-talk-news.herokuapp.com/">GeoTalk</a></Button> 
                        <Button colored ><a href="https://github.com/bgoldfarb/geo-talk">GitHub</a></Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share "/>
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className= "projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: "", height: '176px', background:'url(https://i.pinimg.com/originals/95/d1/0f/95d10f502e973b4a79dae1e1882f623e.png) center / cover'}}>
                        </CardTitle>
                        <CardText>
                            Fingerprint algorithms to detect stored fingerprints to open
                            and close a lock
                        </CardText>
                        <CardActions border>
                            <Button colored ><a href="https://github.com/bgoldfarb/BiometricSecurityScanner">Biometric security scanner</a></Button> 
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share "/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className= "projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: "", height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png) center / cover'}}>
                        OMS Pipeline Tool
                        </CardTitle>
                        <CardText>
                           Tool to automate regression testing
                        </CardText>
                        <CardActions border>
                            <Button colored ><a href="https://github.com/bgoldfarb/OMSPipelineTool">OMS Pipeline Tool</a></Button> 
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share "/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: "", height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png) center / cover'}}>
                        Library Database
                        </CardTitle>
                        <CardText>
                           Library Database SQL queries and Functionality
                        </CardText>
                        <CardActions border>
                            <Button colored ><a href="https://github.com/bgoldfarb/libraryDatabase">Library Database</a></Button> 
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share "/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className= "projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: "", height: '176px', background:'url() center / cover'}}>
                        Test Driven Vending Machine Kata
                        </CardTitle>
                        <CardText>
                        Test Driven Vending Machine Kata
                        </CardText>
                        <CardActions border>
                            <Button colored ><a href="https://github.com/bgoldfarb/VendingMachinesTDD">Vending Machine TDD</a></Button> 
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share "/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return(
            <div className = "category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>
                    <Grid>
                        <Cell col = {12}>
                            <div className="content">{this.toggleCategories()} </div>
                        </Cell>
                    
                    </Grid>
            </div>
        )
        
    }
}

export default Projects