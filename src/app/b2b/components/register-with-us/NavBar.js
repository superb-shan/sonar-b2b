import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height: '60px', backgroundColor: "white", px: '70px', boxShadow: '0px 3px 6px #0000001A'}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <Link href={'/b2b/'}><Image src='/logo.svg' width={125} height={36} /></Link>
          <Link href={'/b2b/?tab=contact'} className='font-poppins text-primary font-semibold'>Contact Us</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}