import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'
class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            email:'',
            passward:'',
            loading:false,
            errors:{}
        }
    }
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
               <Typography variant='h2' className='pageText' style={{margin:'10px auto 10px auto '}} > Sign Up</Typography>
                <form noValidate >
                    <TextField id='user' name='userName' type='user' label='user' className='textField' value={this.state.user} fullWidth style={{margin:'10px auto 10px auto'}}></TextField>
                    <TextField id='email' name='email' type='email' label='Email' className='textField' value={this.state.email} onChange={this.handleChange} fullWidth style={{margin:'10px auto 10px auto'}}></TextField>
                    <TextField id='password' name='password' type='password' label='Password' className='textField' value={this.state.password}  fullWidth style={{margin:'10px auto 10px auto'}}></TextField>
                    <Button type="submit" variant='contained' color='primary' className='button' style={{marginTop:'20px', outline:'none'}}>Sign Up</Button>
                    <br/>
                    <small >Already have an account ? Login <Link to='/Login'>here</Link></small>
                </form>
               </Grid>
               <Grid item sm></Grid>
          </Grid>
        )
    }
}

export default Signup;
