import React, { Component }from "react";


import './App.css';
import Navbar from './componentes/Navbar';
import Comp from "./componentes/Comp";
import User from "./componentes/User";
import List from "./componentes/List";


class App extends Component{

  constructor(props){
      super(props)
        this.state = {
          name : "",
          email: ""
        }
        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.changeImput = this.changeImput.bind(this)
  }

  changeState () { 

    this.setState({
      //modifica o estado
      name : "Exemplo",
      email: "Exemplo"
      
    })
  }
  resetState () { 
    //Reseta o valor que foi modificado
    this.setState({

      name : "Nome",
      email : "email@exemplo.com.br"
      
    })
  }
  changeImput(event){
    //Irá receber e passar o imput recebido
    let target = event.target
    let index = target.name
    this.setState({
      [index] : target.value
    })

  }
  render(){

  return (

    <div className="App">

        <Navbar></Navbar>
        <header className="App-header">
          
        <article className="container">
        <div className="resposta">
        { this.state.name }
        </div>
        <div className="conteudo">
        { this.state.email }
        </div>
        <button onClick={this.changeState} className="botao">
            Mudar Nome
        </button>
        <button onClick={this.resetState} className= "botaoReset">
            Resetar Nome

        </button>
        <form>
          <label>
            Nome :
            <input 
            type= "text" 
            name="name" 
            value={this.state.name}
            onChange={this.changeImput}
            >
            </input>
          </label>
          <label>
            Email :
            <input 
            type= "email" 
            name="email" 
            value={this.state.email}
            onChange={this.changeImput}
            >
            </input>
          </label>
        </form>
        </article>
          <p>Demonstração usando react</p>
          <User name = 'João'></User>
          <User name = 'Natasha'></User>
          <User name = 'Pedro'></User>

          <div className="listagem">
            <List></List>
          </div>
        </header>

        <Comp></Comp>

    </div>

  );
}
};
export default App;
