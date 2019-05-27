import React, { Component } from 'react'
import { Image, Row, Col } from "react-bootstrap"

export class Pokeinfo extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Image height="100%" src={this.props.infoPoke.img} />
                    </Col>
                    <Col style={{
                        textAlign: "left"
                    }}> 
                        <h4> {this.props.infoPoke.nome} - {this.props.infoPoke.id} </h4>
                        <p> Tipo: {this.props.infoPoke.tipo} </p>
                        <p> Peso: {this.props.infoPoke.pesoKG} kg </p>
                        <p> Altura: {this.props.infoPoke.alturaM} m </p>
                    </Col>
                    <Col>
                    jaj
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Pokeinfo
