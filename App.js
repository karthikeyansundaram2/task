    import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
     email_id: '',
    password:'',
    accesstoken_user:'',
     };
  }
  

  handleChangeEmail = event => {
    this.setState({ email_id: event.target.value });
  

  }

  handleChangepassword = event => {
    this.setState({ password: event.target.value });

  }

  handleSubmit = event => {
    event.preventDefault();
var accesstoken_user='';

    
var querystring = require('querystring');
    axios.post('https://beta-api.leaguex.com/auth/login', querystring.stringify({ email_id:this.state.email_id,password:this.state.password }),
    {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(res => {
        console.log(res);

               
         

         console.log(accesstoken_user);

        
      })
.catch(error => {
    console.log(error.response)
});

    this.props.history.push('/Matches');
    }

    render() {
        
      return(
      
   
     <div className="App">
           LEAGUE
        
          <form onSubmit={this.handleSubmit}>
          <label>
            Email_Id:
            <input type="text" name="email_id"  onChange={this.handleChangeEmail} />

          </label>
                <br />
                
           <label>
            password:
            <input type="password" name="password"  onChange={this.handleChangepassword} />
          </label>
             <br />
           <button  type="submit"  >Login</button>

        </form>
</div>
           );
    }
  }

  export default App;