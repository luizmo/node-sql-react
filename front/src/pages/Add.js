import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../components';
import  api  from '../lib/api';

class Add extends Component{
  state = { veiculo:'', marca:'', ano:'', descricao:'', vendido: false, send: false }
  handleSubmit = async e => {
    e.preventDefault();
    const { veiculo, marca, ano, descricao, vendido } = this.state;
    try {
      await api.post("/veiculos", { veiculo, marca, ano, descricao, vendido })
      .then(
        this.setState({ send: true })
      )
    } 
    catch (err) {
      console.log(err);
    }
  }
  render(){
    const { send } = this.state;
    return(
      <Fragment>
        <Header/>
        <main>
          <section className="form">
            {send && <p>Registrado com sucesso!<br/> Para adicionar outro click <button onClick={ () => this.setState({ send: false }) }>aqui</button></p>}
            {!send && (
              <form onSubmit={ this.handleSubmit } method="POST">
                <div>
                  <input type="text" placeholder="Veículo" onChange={e => this.setState({ veiculo: e.target.value })} />
                  <label>Veículo</label>
                </div>
                <div>
                  <input type="text" placeholder="Marca" onChange={e => this.setState({ marca: e.target.value })} />
                  <label>Marca</label>
                </div>
                <div>
                  <input type="number" placeholder="Ano" onChange={e => this.setState({ ano: e.target.value })} />
                  <label>Ano</label>
                </div>
                <div className="desc">
                  <textarea placeholder="Descrição" onChange={e => this.setState({ descricao: e.target.value })}/>
                  <label> Descrição </label>
                </div>
                <button type="submit">Enviar</button>
              </form>
            )}
            
          </section>
        </main>
        <Footer/>
      </Fragment>
    );
  }
}

export default Add