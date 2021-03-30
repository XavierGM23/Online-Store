import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

import './App.scss';

// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// }
function App()  {
    return (
      <div className='App'>
        <Header />
        <Switch> 
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
        </Switch>  
      </div>
    );

}

export default App;