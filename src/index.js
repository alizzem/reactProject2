import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wine from './wine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='winediv'>
      <Wine title="French" description="Red" rating="3.6" isInStock = {true} like = {false}/>
      <Wine title="Italian" description = "White" rating = "4" isInStock = {false} like = {true}/>
      <Wine title="German" description = "Red" rating = "2.5" isInStock = {true} like = {false}/>
    </div>
  </React.StrictMode>
);

