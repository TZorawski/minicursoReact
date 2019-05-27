import React, { Component } from 'react'
import Input from "../Input"
import Button from "../../Button"
import { Row, Col } from "react-bootstrap"

export class SearchPokeForm extends Component {



    render() {
        return (
            <form onSubmit={this.props.onSubmit} >
                <Row>
                    <Col xs="11">
                        <Input placeholder="Digite seu poke..." value={this.props.nome} onChange={this.props.onChange}/>
                    </Col>
                    <Col xs="1">
                        <Button disabled={(this.props.nome === "")} type="submit" >Buscar</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

export default SearchPokeForm
