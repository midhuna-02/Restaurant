import React, {useState} from 'react'
import './Header.css'
import { Box, Typography } from '@mui/material'
import {styled} from '@mui/system'
import CustomButton from '../CustomButton/CustomButton'
import logo from '../../assets/logo.png'
import MenuIcon from "@mui/icons-material/Menu"
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'


import {
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon

} from '@mui/material'

import { useNavigate } from 'react-router-dom'
function Header() {
  const [mobileMenu,SetMobileMernu] = useState({left:false})
  const Navigate=useNavigate()
  
  const toogleDrawer=(anchor,open)=>(event)=>{
    if(event.type ==='keydown' && (event.type==='Tab'|| event.type==='Shift'))
    {
      return;
    }
  
  SetMobileMernu({...mobileMenu,[anchor]:open})
  }
  const list=(anchor)=>(
    <Box sx={{
      width:anchor ==='top'|| anchor === 'bottom' ? 'auto' : 250
    }}
      role="presentaion"
      onClick={toogleDrawer(anchor,false)}
      onKeyDown={toogleDrawer(anchor,false)}
      >
      <List>
        {
          nav_titles.map((item,index)=>(
 <ListItem key={item.index} disablePadding onClick={()=>Navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>
               {
                index === 0 && <HomeIcon/>
               }
               {
              index === 1 && <FeaturedPlayListIcon/>
               }
               {
                index === 2 && <MiscellaneousServicesIcon/>
               }
               {
                index === 3 && <ContactsIcon/>
               }
                </ListItemIcon>
                <ListItemText primary={item.display} />
              </ListItemButton>
            </ListItem>
          ))
        }
           
         
        </List>
    </Box>

  )
    const nav_titles=[
        {
        path:'/',
        display:'Home'
       },
       {
        path:'/dishes',
        display:'Dishes'
       },
       {
        path:'/services',
        display:'Services'
       },
       {
        path:'/about',
        display:'About Us'
       },

]
const NavBarLinksBox =styled(Box)(({theme})=>(
  {
  display:'flex',
  alignItems:"center",
  justifyContent:"center",
  gap:theme.spacing(3),
  [theme.breakpoints.down("md")]:{
    display:'none',
  },
  }
))
const NavBarLink =styled(Typography)(()=>(
  {
  fontSize:"15px",
  color:'#4f5361',
  fontWeight:'bold',
  cursor:'pointer',
  '&:hover':{
    color:'#fff'
  }
 
  }
))
  const NavBarLogo=styled('img')(({theme})=>(
    {
     cursor:'pointer',
     [theme.breakpoints.down("md")]:{
     display:'none'
     }
    }
  ))
  const CustomMenuIcon=styled(MenuIcon)(({theme})=>(
    {
     cursor:'pointer',
     display:'none',
     marginRight:theme.spacing(2),
     [theme.breakpoints.down("md")]:{
     display:'block'
     }
    }
  ))
 

  return (
   <Box
   sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'40px',
    backgroundColor:'#FED801',
    marginLeft:'0px',
    marginBottom:'-24px',
   }}
   >
    
    <Box
    sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'2.5rem'
   
   }}
    >
      <Box
    sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
     
     }}
    > 
    <CustomMenuIcon  onClick={toogleDrawer('left',true)}/>
    <Drawer
      anchor="left"
      open={mobileMenu["left"]}
      onClose={toogleDrawer('left',false)}
      >
        {list('left')}
    </Drawer>
    <img src={logo} alt="" /></Box>
     <NavBarLinksBox>
        {nav_titles.map((navItem,index)=>(
            <NavBarLink variant='body2' onClick={()=>Navigate(navItem.path)}>{navItem.display}</NavBarLink>

        ))}
        
        
     </NavBarLinksBox>
    </Box>
    <Box
    sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'1rem'
   
   }}
    >
    <NavBarLink variant='body2'>Sign Up</NavBarLink>
    <CustomButton 
    backgroundColor="#0f1b4c"
    color='#fff'
    buttonText="Register"
    />
    </Box>
   </Box>
  )
}

export default Header