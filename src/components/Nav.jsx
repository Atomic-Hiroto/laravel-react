import React from 'react'
import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} mx={20} py={5} style={{"backgroundColor":"#61677A","borderBottomRightRadius":"8px","borderBottomLeftRadius":"8px","fontWeight":"bold"}} px={5}>
        <Link to={"/"} style={{"textDecoration":"none","backgroundColor":"#D8D9DA", "padding":"10px","borderRadius":"8px"}} >Home</Link>
        <Link to={"/products"} style={{"textDecoration":"none","backgroundColor":"#D8D9DA", "padding":"10px","borderRadius":"8px"}} >Products</Link>
        <Link to={"/about"} style={{"textDecoration":"none","backgroundColor":"#D8D9DA", "padding":"10px","borderRadius":"8px"}} >About</Link>
    </Stack>
  )
}
