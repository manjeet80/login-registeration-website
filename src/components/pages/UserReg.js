import React,{useState} from 'react'
import { TextField,FormControlLabel,Checkbox,Button,Box,Alert } from '@mui/material'
import {useNavigate} from 'react-router-dom'
const UserReg = () => {

  
const [error, setError] = useState({
  status:'false',
  msg:'',
  type:''
})
const navigate = useNavigate()
  const handleSubmit =(e)=>{
         e.preventDefault()
         const data=new FormData(e. currentTarget)
         const actualData = {
          name: data.get('name'),
         email: data.get('email'),
          password: data.get('password'),
        password_confirmation: data.get('password_confirmation'),
        tc: data.get('tc'),
      }
        if(actualData.name && actualData.email && actualData.password && actualData.tc!== null)
        {
        if(actualData.password === actualData.password_confirmation){
          console.log(actualData)
          document.getElementById('registration-form').reset()
          setError({status:true,msg:"Registration Success",type:'success'})
          navigate('/dashboard')
        
        }else{
          setError({status:true,msg:"Password Doesn't Match",type:'error'})
        }
        } else{
         setError({status:true,msg:"All Fields are Required",type:'error'})
        }
  }
return (
   <>
     <Box component='form' noValidate sx={{mt:1}} id="registration-form"onSubmit={handleSubmit}>
     <TextField  required fullWidth margin='normal' id="name" name="name"label="Name" />
    <TextField  required fullWidth margin='normal' id="email" name="email"label="Email Adress" />
    <TextField  required fullWidth margin='normal' id="password" type="password" name="password"label="Password" />
    <TextField  required fullWidth margin='normal' id="password_confirmation" type="password_confirmation" name="password_confirmation"label="Confirm Password" />
<FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" />} label="I agree to term and condition."/>
<Box textAlign='center'>
    <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Join</Button>
</Box>

{error.status ? <Alert severity={error.type}>{error.msg}</Alert> :""}
    </Box>
   </>
  )
}

export default UserReg
