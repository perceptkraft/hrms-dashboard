import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Signup = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={12} >
          <div >
            <Item style={{ height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h1>Sign Up</h1>
                <TextField
                  required
                  id="outlined-required"
                  label="Full Name"
                  type="text"
                  sx={{ width: 400 }}
                />
                <br />
                <br />
                <TextField
                  required
                  id="outlined-required"
                  label="Contact Number"
                  type='text'
                  sx={{ width: 400 }}
                />
                <br />
                <br />

                <TextField
                  required
                  type='email'
                  id="outlined-required"
                  label="Email"
                  sx={{ width: 400 }}
                />

                <br /><br />

                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  type="password"
                  sx={{ width: 400 }}
                />

                <br /><br />

                <Button style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder', }} variant="contained" sx={{ width: 400 }}>Sign in</Button>

                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder' }}>
                    <p>
                      <span>
                        Aready Registered ? <Link to="/signin" style={{ textDecoration: 'none' }} >Sign In </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Item>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Signup
