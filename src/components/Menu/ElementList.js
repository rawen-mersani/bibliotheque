import React from 'react';
import Element from './Element.js'



export default function ElementsList(props) {
  return (
    <div className="ElementsList">
        
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
              {
                props.objects.map( (object,index) => (
                  
                  <Element key={index} title={object.title} icon ={object.icon} >  
                  </Element>
                )) 
              }    
      
      </ul>
      
    </div>
  );

  
}

