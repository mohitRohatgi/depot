import React, {useState, Component} from 'react'
import {  Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { HOME, SIGNUP_URL, ROOT, LOGIN_URL } from '../../api'

class Login extends Component {
    constructor(props) {
        super(props)
        this.loginUser = this.loginUser.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.state = {
            username: "",
            password: "",
            errorMessage: null
        }
    }

    handleUsernameChange (evt) {
        this.setState({
            username: evt.target.value
        })
    }

    handlePasswordChange(evt) {
        this.setState({
            password: evt.target.value
        })
    }

    loginUser(evt) {
        evt.preventDefault()
        let username = this.state.username
        let password = this.state.password
        let token = document.head.querySelector("[name=csrf-token]").content
        let body = JSON.stringify({ user : {email: this.state.username, password: this.state.password} })
        console.log(username)
        fetch('http://localhost:3000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            body: body,
            })
        .then((response) => {
            console.log("first then")
            window.location = HOME
            return response.json() 
        })
        .then((user) => {
            console.log('here')
        })
    //     fetch("http://localhost:3000/users/sign_in", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email: this.state.username,
    //             password: this.state.password
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //         if (data.jwt) {
    //             localStorage.setItem("token", data.jwt)
    //             this.setState({
    //                 username: "",
    //                 password: ""
    //             })
    //             this.setState({
    //                 errorMessage: null
    //             })
    //             window.location = HOME
    //         }else{
    //             this.setState({
    //                 errorMessage: "Invalid Username/ Password"
    //             })
    //             window.location = ROOT
    //         }
            
            
    //     })
    //     .catch(error => {
    //         this.setState({
    //             errorMessage: "Invalid Username/ Password"
    //         })
    //         window.location = ROOT
    //     });
    }

    render() {
        return(
            <Grid centered columns={4}>
                <Grid.Column>
                    { this.state.errorMessage &&
                    <h3 className="error"> { this.state.errorMessage } </h3> }
                    <Header as="h2" textAlign="center">
                        Login
                    </Header>
                    <Segment>
                        <Form size="large" onSubmit={this.loginUser}>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                                onChange={this.handleUsernameChange}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                onChange={this.handlePasswordChange}
                            />
                            <Button color="blue" fluid size="large">
                            Login
                            </Button>
                        </Form>
                    </Segment>
                    <Message>
                        Not registered yet? <a href={SIGNUP_URL}>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login
