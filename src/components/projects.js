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
                    React Project #1
                    </CardTitle>
                    <CardText>
                        react description here
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share "/>

                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: "#fff", height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                        react description here
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
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
                <div><h1>This is Python</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Java</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is JavaScript</h1></div>
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