import React from 'react'
import {Box,Typography,Container} from '@mui/material'
import {styled} from '@mui/system'
import logoImage from '../../assets/logo.png'
import startImage from '../../assets/Star.png'
import logosImage from '../../assets/logos.png'

function Partner() {
    const CustomContainer=styled(Container)(({theme})=>(
        {
         display:"flex",
         justifyContent:"space-between",
         [theme.breakpoints.down('md')]:{
            flexDirection:"column",
            textAlign:"center",
            alignItems:"center",
            mb:theme.spacing(4)
         }
        }
    ))
    const CustomBox=styled(Box)(({theme})=>(
        {
        
         [theme.breakpoints.down('md')]:{
           
            mb:theme.spacing(4)
         }
        }
    ))
  return (
    <Box sx={{mt:10}}>
<CustomContainer>
<CustomBox>
<img
src={logoImage}
style={{maxWidth:'100%'}}
></img>
<Typography
sx={{
    color:'#708589',
    fontSize:'16px',
    fontWeight:'bold',
    mt:2,
}}

>More than 45,000 trust Techflix </Typography>
</CustomBox>
<Box>
<img
src={startImage}
style={{maxWidth:'100%'}}
></img>
<Typography
sx={{
    color:'#708589',
    fontSize:'16px',
    fontWeight:'bold',
    mt:2,
}}

>5 Star rating (2k+ Reviews) </Typography>
</Box>
</CustomContainer>
<Container sx={{display:"flex",flexDirection:"column"}}>
<img src={logosImage} alt="" />
</Container>
    </Box>
  )
}

export default Partner