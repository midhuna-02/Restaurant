import React from 'react'
import CustomCard from '../../components/CustomCard/CustomCard'
import {styled,Box,Container,Typography} from '@mui/material'
import { Data } from '../../StaticData/Data'

function Dishex() {
    const DishesBox=styled(Box)(({theme})=>(
        {
            display:'flex',
            marginTop:theme.spacing(5),
            justifyContent:'center',
            [theme.breakpoints.down('md')]:{
                flexDirection:'column',
                alignItems:'center',
            }
        }
    ))
    const PropertiesTextBox=styled(Box)(({theme})=>(
        {
      [theme.breakpoints.down('md')]:{
        textAlign:'center'
      }
    }
    ))
  return (
    <Box sx={{mt:5, py:10, backgroundColor:'#f5fafe'}}>
        <Container>
            <PropertiesTextBox>
            <Typography sx={{color:"#000339",fontSize:'35px',fontWeight:'bold',ml:'13px'}}>Featured Dishes</Typography>
            <Typography sx={{color:"#5a6a73",fontSize:'16px',mt:1,ml:'13px'}}>Explore Variety of South Indian Dishes</Typography>
            </PropertiesTextBox>
            <DishesBox>
                {Data.map((foodItem)=>(
                      <CustomCard
                      key={foodItem.id}
                      img={foodItem.image}
                      price={foodItem.price}
                      item={foodItem.item}
                      likes={foodItem.likes}
                      heart={foodItem.heart}
                      share={foodItem.share}
                      />

                      
                    
                ))}
              
            </DishesBox>
        </Container>
    </Box>
  )
}

export default Dishex