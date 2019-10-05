import React, { Component, Fragment } from 'react';
import { CarBox, Header, Footer } from '../components';
import  api  from '../lib/api';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = { cars: null }
  }
  componentWillMount(){
    api.get('/veiculos').then( res => this.setState({ cars: res.data }))
  }
  render(){
    const { cars } = this.state;
    return(
      <Fragment>
        <Header/>
        <main  className="grid">
          <section>
            { cars && cars.map((data,key) => <CarBox data={data} key={key}/> ) }

            { cars && cars.lenght < 0 && <p> Nenhum carro registrado ainda </p>}
            
          </section>
        </main>
        <Footer/>  
      </Fragment>
    );
  }
}

export default Home;