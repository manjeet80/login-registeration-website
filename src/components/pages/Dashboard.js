import React from 'react'
import {Button, CssBaseline,Grid, Typography} from '@mui/material'
import { useNavigate } from 'react-router'
import ChangePassword from './ChangePassword'

const Dashboard = () => {

const navigate = useNavigate()

const handleLogout =()=>{
navigate('/login')
 }
  return (
    <>
    <CssBaseline />
  <Grid container>
    <Grid item sm={4} sx={{backgroundColor:"gray",p:5,color:'white'}}>
      <h1>Dashboard</h1>
    <Typography variant="h5">Email: manjeetsingh80531@gmail.com</Typography>
      <Typography variant="h6">Name: Manjeet</Typography>
<Button variant='contained'color='warning' sx={{mt :8}}size='large' onClick={handleLogout}>Logout</Button>
    </Grid>
    <Grid item sm={8}>
<ChangePassword/>
   </Grid>
   </Grid>
   
    </>
  )
}

export default Dashboard
