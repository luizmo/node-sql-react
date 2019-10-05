import React, { Component } from 'react';
import  api  from '../lib/api';
import { withRouter } from 'react-router-dom';

class CarBox extends Component{
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }
  async remove(e, id){
    const { history } = this.props;
    e.preventDefault();
    await api.delete(`/veiculos/${id}`)
    .then(
      alert('Removido com sucesso')
    )
    history.push('/');
  }
  render(){
    const { remove, data } = this.props;
    return(
      <article>
        <div>
          <img src={ require('../img/default.png') } alt="Imagem default"/>
        </div>
        <div className="infos">
          <p>{data.veiculo}</p>
          <ul>
            <li>{data.marca}</li>
            <li>{data.ano}</li>
          </ul>
          <p>{data.descricao}</p>
          <small>Status</small>
        </div>
        {remove && <button onClick={ e => this.remove(e, data.id) }>Remover</button> }                
      </article>
    );
  }
} 

export default withRouter(CarBox);