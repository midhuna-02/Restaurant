import React from 'react'
import {Box,Button,Typography} from "@mui/material"
import {styled} from '@mui/system'
import {Container} from '@mui/system'
import CustomButton from '../../components/CustomButton/CustomButton'
import welcome from '../../assets/welcome.png'

const CustomBox=styled(Box)(({theme})=>(
    {
    display:"flex",
    justifyContent:"center",
    gap:theme.spacing(5),
    marginTop:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
      },
    }
    
)
)
const Title=styled(Typography)(({theme})=>(
    {
    color:'#fff',
    fontSize:"64px",
    fontWeight:"bold",
    margin:theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]:{
       fontSize:"40px",
      },
    }
    
)
)
const Welcome=()=> {
  return (
   <Box sx={{backgroundColor:"#FED801", minHeight:"80vh"}}>
    <Container>
        <CustomBox>
           <Box sx={{flex:"1"}}>
            <Typography
            variant="body2"
            sx={{
                fontSize:"15px",
                color:"#6B7690",
                fontWeight:"500",
                mt:10,
                mb:4
            }}
          
            
            >
            Welcome to Techflix Restuarant
            </Typography>
            <Title variant="h1">
                Discover a place where you'll love to eat
            </Title>
            <Typography
            variant="body2"
            sx={{
                fontSize:"18px",
                color:"#5A6A473",
                
                my:10,
                
            }}
            >
                Immerse your self in the elegant ambience as your saver each bite, accompined by our extensive selection of hand-picked wines
            </Typography>
            <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="More About Us"
            welcomeBtn={true}
            >
                
            </CustomButton>

           </Box>
           <Box sx={{flex:"1.25"}}>
           <img
           src={welcome}
 style={{maxWidth:'100%',marginBottom:"2rem"}}
           ></img>
           </Box>
        </CustomBox>
    </Container>

   </Box>
  )
}

export default Welcome