import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const VerifyPassword = () => {
  let navigate = useNavigate();

  const backRoute = () => {
    let path = `/signin`;
    navigate(path);
  }

  return (
    <div>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={12} >
          <div >
            <Item style={{ height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h1>Verify</h1>
                <TextField
                  required
                  id="outlined-required"
                  label="6-digit Code"
                  sx={{ width: 400 }}
                />
                <br /><br />
                <Button onClick={backRoute} style={{ fontFamily: 'Montserrat, sans-serif, Open Sans, Roboto', fontWeight: 'bolder', }} variant="contained" sx={{ width: 400 }}>Submit <KeyboardArrowRightIcon /></Button>
              </div>
            </Item>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default VerifyPassword