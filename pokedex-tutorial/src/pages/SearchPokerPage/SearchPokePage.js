import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap';
import SearchPokeForm from '../../components/Form/SearchePokeForm';
import { getPokeByName} from "../../utils/API"
import Pokeinfo from "../../components/Pokeinfo"

export class SearchPokePage extends Component {
    state = {
        nomePoke: "",
        infoPoke: {

        }
    }

    onChange = (e) => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();     // impede browser de atualizar
        // console.log("Enviar");
        getPokeByName(this.state.nomePoke.toLocaleLowerCase()).then(
            res => {
                // console.log(res)
                const infoPoke = {}
                infoPoke.nome = res.data.name
                infoPoke.id = res.data.id
                infoPoke.pesoKG = res.data.weight / 10
                infoPoke.alturaM = res.data.height / 10
                infoPoke.status = {}
                res.data.stats.forEach(
                    status => {
                        infoPoke.status[status.stat.name.replace("-", "")] = status.base_stat
                    }
                )
                infoPoke.img = res.data.sprites.front_default
                infoPoke.tipo = res.data.types.map(value =>  // constroi um vetor com os nomes dos tipos
                    (value.type.name)
                )
                console.log(infoPoke)
            }
        ).catch(
            ex => {
                console.log(ex)
                if (ex.response.status === 404) {
                    alert("Pokemon não encontrado.")
                }
            }
        ).finally(
            () => {
                this.setState({
                    nomePoke: ""
                })
            }
        )
    }

    render() {
        return (
            <Container className="text-center">
                <Image style={{
                    marginTop: "40px",
                    marginBottom: "20px"
                }} height="150" src={require("../../images/pokebola.jpg")} />
                <SearchPokeForm nome={this.state.nomePoke} onChange={this.onChange} onSubmit={this.onSubmit}/>
                <hr/>
                <Pokeinfo />
            </Container>
        )
    }
}

export default SearchPokePage
