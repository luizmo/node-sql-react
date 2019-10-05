import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = { open: false }
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu(){
    this.setState({ open: !this.state.open })
  }
  render(){
    return(
      <header>
        <button  onClick={this.hideMenu} className="mobile">
          <span>Menu</span>
        </button>
        <nav className={this.state.open ? '' : 'hide' }>
          <button onClick={this.hideMenu} className="mobile">
            <span>Fechar</span>
          </button>
          <ul>
            <li>
              <Link onClick={this.hideMenu} to="/">
                Listar Carros
              </Link>
            </li>
            <li>
              <Link to="/adicionar">
                Adicionar Carros
              </Link>
            </li>
            <li>
              <Link to="/remover">
                Remover Carros
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}


export default Header