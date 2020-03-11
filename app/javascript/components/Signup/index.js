import React from 'react'
import {  Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { ROOT } from '../../api'


class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.signupUser = this.signupUser.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this)
        this.state = {
            name: "",
            password: "",
            confirmPassword: ""
        }
    }

    nameChange(evt) {
        this.setState({
            name: evt.target.value
        })
    }

    passwordChange(evt) {
        this.setState({
            password: evt.target.value
        })
    }

    confirmPasswordChange(evt) {
        this.setState({
            confirmPassword: evt.target.value
        })
    }

    signupUser() {
        let token = document.head.querySelector("[name=csrf-token]").content
        let body = JSON.stringify({ 
            user : {
                email: this.state.name,
                password: this.state.password, 
                password_confirmation: this.state.confirmPassword
            }
        })
        fetch('http://localhost:3000/../../users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            body: body,
            })
        .then((response) => { 
            window.location = ROOT
            return response.json() })
        .then((user) => {
                console.log("error")
        })

        // fetch(LOGIN_URL, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: this.state.name,
        //         password: this.state.password,
        //         password_confirmation: this.state.confirmPassword
        //     })
        // }).then(resp => resp.json())
        // .catch(error => {
        //     this.setState({
        //         errorMessage: "Invalid Username/ Password"
        //     })
        //     window.location = "http://localhost:3000/users/sign_up"
        // });
    }

    render() {
        return(
            <Grid centered columns={4}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Signup
                    </Header>
                    <Segment>
                        <Form size="large" onSubmit={this.signupUser}>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email address"
                                onChange={this.nameChange}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                onChange={this.passwordChange}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Confirm Password"
                                type="password"
                                onChange={this.confirmPasswordChange}
                            />
                            <Button color="blue" fluid size="large">
                                Signup
                            </Button>
                        </Form>
                        <Message>
                            Already registered? <a href={ROOT}>Login</a>
                        </Message>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Signup