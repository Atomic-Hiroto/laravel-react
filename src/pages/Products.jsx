import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Box,FormControl,Grid, InputLabel, Menu, MenuItem, Select } from '@mui/material'

export default function Products() {
   let [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_LARAVEL_BASE}/api/products`).then((data)=>{
            setProducts(data.data.data);
            //console.log(data)
        })
    },[])

  return (
    <>
    <FormControl style={{"width":"200px","margin":"20px 200px","background-color":"gray","borderRadius":"8px"}}>
  <InputLabel>Select Category</InputLabel>
  <Select
    label="Select Category"
    onChange={(e)=>{
        if(e.target.value=="all"){
            axios.get(`${process.env.REACT_APP_LARAVEL_BASE}/api/products`).then((data)=>{
                setProducts(data.data.data);
                //console.log(data)
            })
            return;
        }
        axios.get(`${process.env.REACT_APP_LARAVEL_BASE}/api/products/categories/${e.target.value}`).then((data)=>{
            setProducts(data.data);
        })
    }}
  >
    <MenuItem value={"all"}>All</MenuItem>
    <MenuItem value={"smartphones"}>Smartphones</MenuItem>
        <MenuItem value={"laptops"}>Laptops</MenuItem>
  </Select>
</FormControl>
    <Box display={"grid"} gap={2} style={{"backgroundColor":"#61677A"}} color={"#FFF6E0"} mx={20} my={5} borderRadius={8} p={5} gridTemplateColumns={"repeat(4,1fr)"}>
        {
            products.map((elem)=>{
                return <Grid item backgroundColor={"#272829"}>
                    <img src={elem.images ? elem.images[0].image_url : ""}  width={"100%"} />
                    <div style={{"padding":5}}>
                    <h3>{elem.title}</h3>
                    <p>{elem.brand}</p>
                    <p>{elem.description}</p>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <p>Price: {elem.price}</p>
                        <p>Stock: {elem.stock}</p>
                    </Box>
                    </div>
                </Grid>
            })
        }
    </Box>
    </>
  )
}