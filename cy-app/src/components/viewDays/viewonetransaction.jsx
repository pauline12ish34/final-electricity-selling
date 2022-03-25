import React from 'react';
import axios from 'axios';


 
  export default class View extends React.Component {

    state = {
        transaction: []
      }
    
      componentDidMount() {
        axios.get("http://localhost:4008/elect/api/:token")
          .then(res => {
            const transactions = res.data;
            this.setState({ transaction });
          })
      }
    
      render() {
        return (
            <>
           <div>
               <h1>One transaction</h1>
           </div>
            </>
        )}
    }
