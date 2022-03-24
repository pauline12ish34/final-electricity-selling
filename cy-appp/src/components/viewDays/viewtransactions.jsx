import React from 'react';
import axios from 'axios';


 
  export default class View extends React.Component {

    state = {
        transactions: []
      }
    
      componentDidMount() {
        axios.get("http://localhost:4008/api/tokens")
          .then(res => {
            const transactions = res.data;
            this.setState({ transactions });
          })
      }
    
      render() {
        return (
            <>
            <table >
                <thead>
                    <tr>
                    <th>token</th>
                    <th>meter numbre</th>
                    <th>money paid</th>
                    <th>remaining Days</th>
                    </tr>
                </thead>
  <tr>
                {
                    
          this.state.persons
            .map(transaction =>
              <td key={transaction.token}>{transaction.token},{transaction.meter}, {transaction.money} , {transaction.status}, {transaction.dateExp}</td>
            )
        }</tr>
            </table>
            </>
        )}
    }
