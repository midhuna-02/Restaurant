import React from 'react'
import { Typography } from '@mui/material'
import {styled} from  '@mui/system'
import {Box,Container} from '@mui/system'
import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'

const Footer=()=>{
    const CustomContainer=styled(Container)(({theme})=>(
        {
            display:'flex',
            justifyContent:'space-around',
            gap:theme.spacing(5),
            [theme.breakpoints.down("sm")]:{
                flexDirection:'column',
                textAlign:'center'
              },
    
        }
    ))
    const FooterLink=styled("span")(({theme})=>(
        {
            display:"flex",
           fontSize:'16 px' ,
           color:'#000066',
           cursor:"pointer",
           fontWeight:'300',
           flexDirection:"column",
           "&:hover":{
            color:'#66B2FF',
           }
        }
    
    ))
    const IconBox=styled(Box)(({theme})=>(
       {
        display:'flex',
        alignItems:'center',
        gap:'1rem',
        [theme.breakpoints.down('sm')]:{
            justifyContent:"center",
        }
       }
    ))
    const Featured_Links=[
        {
            path:'/',
            display:'Guides'
        },
        {
            path:'/',
            display:'Services'
        },
        {
            path:'/',
            display:'Contact Us'
        }
    ]
    const Overview_Links=[
        {
            path:'/',
            display:'Location'
        },
        {
            path:'/',
            display:'Partnership'
        },
        {
            path:'/',
            display:'Terms Of Use & Privacy Policy'
        }
    ]
  return (
    <Box sx={{py:10,backgroundColor:'#FFF6B2'}}>
        <CustomContainer>
            <Box>
               <Typography
               sx={{
                fontSize:'20px',
                color:"#1c1c1D",
                fontWeight:'700',
                mb:2,
               }}
               
               
               >
                 Featured
               </Typography>
               {Featured_Links.map((item,index)=>(
                <>
                <FooterLink key="index">{item.display}</FooterLink>
               
                </>
               ))}
              
            </Box>
            <Box>
                <Typography
                sx={{
                    fontSize:'20px',
                    color:"#1c1c1D",
                    fontWeight:'700',
                    mb:2,
                   }}
                 >
                    Overview
                </Typography>
                {Overview_Links.map((item,index)=>(
                <>
                <FooterLink  key="index">{item.display}</FooterLink>
               
                </>
               ))}
            </Box>
            <Box>
              <Typography
              sx={{
                fontSize:'20px',
                    color:"#1c1c1D",
                    fontWeight:'700',
                    mb:2,
              }}
              >Get in touch</Typography>
              <Typography
               sx={{
                fontSize:'16px',
                    color:"#7A7A7E",
                    fontWeight:'500',
                    mb:2,
              }}
              >Keep in touch with our social media pages.</Typography>
              <IconBox>
                <img
                src={fbIcon}
                style={{cursor:"pointer"}}
                ></img>
                <img
                src={twitterIcon}
                style={{cursor:"pointer"}}
                ></img>
                <img
                src={InstagramIcon}
                style={{cursor:"pointer"}}
                ></img>
              </IconBox>
            </Box>

        </CustomContainer>

    </Box>
  )
}

export default Footer