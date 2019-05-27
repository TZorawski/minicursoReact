import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class MyButton extends Component {
    render() {
        return (
            <div>
                <Button variant="dark" style={{
                    borderRadius: "10px 50px 50px 10px"
                }} type={this.props.type} >
                    {this.props.children}
                </Button>
            </div>
        )
    }
}

export default MyButton
