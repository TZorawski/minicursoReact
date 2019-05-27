import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export class Input extends Component {
    render() {
        return (
            <div>
                <Form.Control style={{
                    borderRadius: "50px 10px 10px 50px"
                }} {...this.props} />
            </div>
        )
    }
}

export default Input
