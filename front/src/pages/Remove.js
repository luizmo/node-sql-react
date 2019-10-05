import React, { Component, Fragment } from 'react';
import { Header, Footer, CarBox } from '../components';
import  api  from '../lib/api';

class Remove extends Component{
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
        <main>
          <section className="list cars">
            { cars && cars.map((data,key) => <CarBox remove data={data} key={key}/> ) }
          </section>
        </main>
        <Footer/>
      </Fragment>
    );
  }
}

export default Remove