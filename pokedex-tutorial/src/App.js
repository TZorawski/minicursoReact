import React, { Component } from 'react'
import Header from './components/Header'
import SearchPokePage from './pages/SearchPokerPage';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <SearchPokePage />
      </div>
    )
  }
}

export default App
