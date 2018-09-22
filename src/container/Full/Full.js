import React from 'react';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
const Full = props => (
    <div className="app">  
      <Header {...props}/> 
        {props.children}
      <Footer />
    </div>
  );

  export default Full;