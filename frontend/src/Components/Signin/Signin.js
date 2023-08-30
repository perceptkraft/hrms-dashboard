import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Signin = () => {

  let navigate = useNavigate();

  const redirectDash = () => {
    const path = "/dash";
    navigate(path);
  }

  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={12} >
          <div >
            <Item style={{ height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h1>Sign In</h1>

                <TextField
                  required
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

                <Button style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder', }} variant="contained" sx={{ width: 400 }} onClick={redirectDash}>Sign in</Button>

                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder' }}>
                    <p>
                      <span>
                        New Here First <Link to="/signup" style={{ textDecoration: 'none' }} >Register Here</Link>
                      </span>
                    </p>
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder' }}>
                    <Link to="/fpass" style={{ textDecoration: 'none' }}>
                      Forgot Password
                    </Link>
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

export default Signin
