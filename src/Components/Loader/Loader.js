import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Loader.css';

export default function Loader(props) {
  return (
    <CSSTransition
      in={props.isLoading}
      timeout={200}
      classNames='my-loader'
      mountOnEnter
      unmountOnExit
      onEnter={()=> document.body.style.height = '100vh'}
      onExited={()=> document.body.style.height = 'auto'}
    >
      <div className="overlay">
        <div className="loader">
        </div>
      </div>
    </CSSTransition>

  )
}
