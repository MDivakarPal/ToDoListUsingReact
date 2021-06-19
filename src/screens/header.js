import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    render() { 
      const date=new Date()
        return (  
          <div className='container'>  
              <div className='header m-2'>
                  <h3>To Do List for {
                      date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
                      }</h3>
              </div>
          </div>
        );
    }
}
 
export default Header;