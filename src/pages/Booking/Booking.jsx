import { Box,Typography, } from '@mui/material'
import React from 'react'
import {styled} from '@mui/system'
import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../../components/CustomButton/CustomButton'


function Booking() {
    const GuideData=[
        {
            path:'/',
            image:buyIcon,
            display:'Order Guides',
            subDisplay:'How to Order',
        },
        {
            path:'/',
            image:sellIcon,
            display:'Booking Guides',
            subDisplay:'How to Book',
        },
        {
            path:'/',
            image:rentIcon,
            display:'Payment Guides',
            subDisplay:'Payment Methode',
        }
    ]
    const CustomBox=styled(Box)(({theme})=>(
        {
      width:"30%",
      [theme.breakpoints.down('md')]:{
      width:"85%",
      },
}))
const GuidesBox=styled(Box)(({theme})=>(
    {
      display:"flex",
      justifyContent:"space-around",
      width:'70%',
      marginTop:theme.spacing(5),
      marginBottom:theme.spacing(5),
      [theme.breakpoints.down('md')]:{
      width:"100%",
      },
      [theme.breakpoints.down('sm')]:{
      marginBottom:'0',
      flexDirection:"column"
      },
    }
))
const GuideBox=styled(Box)(({theme})=>(
    {
        display:'flex',
      flexDirection:'column',
       alignItems:'center',
    
      marginTop:theme.spacing(5),
       [theme.breakpoints.down('sm')]:{
     margin:theme.spacing(2,0,2,0),
    
    }
    }
))
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        padding:"40px",
        justifyContent:"center",
        alignItems:"center"
    }}>
<div
style={{
    width:"5%",
    height:'5px',
    backgroundColor:"#000339",
    margin:"0 auto",
}}
></div>
<Typography sx={{fontSize:"35px",fontWeight:"bold",color:"#000339", my:3}}>How to book?</Typography>
<CustomBox>
    <Typography
    sx={{
color:"#5A6A73",
fontSize:"16px",
fontWeight:"500",
textAlign:"center",
    }}>Everything you need to know when you book for advance slot</Typography>
</CustomBox>
<GuidesBox>
{GuideData.map((item,index)=>(
    <GuideBox>
    
       
     <img src={item.image} alt="" key={index} />
   <Typography
   variant='body2'
   sx={{
    fontWeight:'500',
    fontSize:'20PX',
    color:'#383C45',
    my:1,
   }}
   >{item.display}</Typography>
   <Box
   sx={{
    display:'flex',
    cursor:'pointer',
    justifyContent:'center',
    alignItems:'center',
   }}
   >
    <Typography
    variant='body2'
    sx={{
        color:'#0689ff',
        fontWeight:'bold',
        fontSize:'14px',
    }}
    >{item.subDisplay}</Typography>
    <ArrowRightAltIcon style={{ color:'#0689ff',}} />
   </Box>
   
  
    
    </GuideBox>
      ))}

</GuidesBox>
<CustomButton
backgroundColor='#0F1b40'
color='#fff'
buttonText='See Full Guides'
guideBtn={true}
/>
    </Box>
  )
}

export default Booking