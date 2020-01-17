import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import Signup from './signup'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            passward:'',
            loading:false,
            errors:{}
        }
    }

    // handleSubmit=(e) =>{
    //     e.preventDefault();
    //     this.setState({
    //         loading:true
    //     });
        // const userData ={
        //     email:this.state.email,
        //     password:this.state.passward
        // }
        

    // }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
          <Grid container className='from' style={{textAlign:'center'}}>
              <Grid item sm></Grid>
              <Grid item sm>
                <Typography variant='h2' className='pageText' style={{margin:'10px auto 10px auto '}} >  
                    Login
                </Typography>
                <form noValidate >
                    <TextField id='email' name='email' type='email' label='Email' className='textField' value={this.state.email} onChange={this.handleChange} fullWidth style={{margin:'10px auto 10px auto'}}></TextField>
                    <TextField id='password' name='password' type='password' label='Password' className='textField' value={this.state.password} onChange={this.handleChange} fullWidth style={{margin:'10px auto 10px auto'}}></TextField>
                    <Button type="submit" variant='contained' color='primary' className='button' style={{marginTop:'20px', outline:'none'}}>Login</Button>
                    <br/>
                    <small >Don't have an account ? sign up <Link to='/Signup'>here</Link></small>
                </form>
              </Grid>
              <Grid item sm></Grid>
          </Grid>
        )
    }
}


export default Login


