import React, { Component } from 'react';

import './App.css';


class Matches extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false,
     email_id: '',
    password:'',
    isloading: true,
   matches:null, };
  }
    componentDidMount(){
           return fetch('https://beta-api.leaguex.com:4000/leagues/userleagues?upcoming=true',{
    method:'GET',
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJuYW1lIjpudWxsLCJlbWFpbCI6InZlbmthdEBjYXJ0b29ubWFuZ28yLmNvbSIsIm1vYmlsZV9udW1iZXIiOiI5NDg3Nzk0MzY2IiwiaWF0IjoxNTQxNjkyNDE3LCJleHAiOjEwMTgxNjkyNDE3LCJhdWQiOiIxMTkiLCJpc3MiOiJMZWFndWUgWCJ9.5tpJKVvPpzpmDIXItZ3xpFh8OfW2dJBSc7BJ8EV0RcI',
  }
})
  .then(res =>  res.json())
  .then((resJson) => {

    this.setState(
    {
       isloading : false,
       matches: resJson.upcoming,
    })
  })
        
   .catch((error) =>
    { console.log(error)});    
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
                    <li>{val.id} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{val.match_type} <br />
                    {val.t1_short_name} VS {val.t2_short_name} <br />
                    <img src={val.t1_image} alt="Movie Poster"/> VS <img src={val.t2_image} alt="Movie Poster"/> <br />
                    </li>
                    </ul>
            });


    return (

  <div>{match}</div>
    );
  }
  }
  }

        




export default Matches;
