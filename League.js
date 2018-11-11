import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class League extends Component {

  constructor(props) {
    super(props);

    this.state = { 
    isloading: true,
   matches:null };
  }
    componentDidMount(){

         axios.get(`https://beta-api.leaguex.com:4000/leagues?match_id=399`,
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(res => {
        const leagues = res.data;
        this.setState({ leagues })
  })
    }
    
  render() {
  if(this.state.isloading){

            return(
              <h1>loading...</h1>
            );
          }
           else
           {
            let match=this.state.matches.map((val,key)=>{
               return <ul key={key}>
                    <li>{val.display_name} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{val.winning_amount} <br />
                    {val.entry_fee} <br />
                    
                    </li>
                    </ul>
            });


    return (

  <div>{match}</div>
    );
  }
  }
  }

        




export default League;
