import React, { Component } from 'react'
import PC from './components/PrimeiroComponente/PrimeiroComponente'

export class App extends Component {
  state = {
    nome: "",
    sobrenome: "Zorawski"
  }

  componentWillMount() {
    this.setState({
      nome: "Thais"
    })
  }

  componentDidMount() {
    console.log("hmm... fui montado");
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)
    if (nextState.sobrenome === "Zorawski") {
      return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    // nextState.nome = "Ana"  nextState ->  novos valores
    nextState.nome = "Ana"
    console.log("Serei atualizado")
  }
  
  
  updateNome = () => {
    this.setState({
      nome: "Paula"
    })
  }

  updateLastNome = () => {
    this.setState({
      sobrenome: "Silva"
    })
  }
  

  render() {
    const CompSub = this.state.nome !== "" ? <p>Tenho um nome</p> : null
    return (
      <div>
        <h1>Sou um componente do {this.state.nome} {this.state.sobrenome}.</h1>
        <PC nome={this.state.nome} />
        <PC nome={this.state.sobrenome} />
        {CompSub}

        <button onClick={this.updateNome}>Atualizar nome</button>
        <button onClick={this.updateLastNome}>Atualizar sobrenome</button>
      </div>
    )
  }
}

export default App
