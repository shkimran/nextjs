"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import Link from "next/link";
const Product = () => { //client component Api integration
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://dummyjson.com/products");
      response = await response.json();
      setProduct(response.products);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
    <Grid container>
      {product.map((item) => (
   <Grid item lg={3} md={6} sm={6} xs={12} key={item.id}>
         <Card sx={{ m: 2 }}>
          <CardContent>
      <Box sx={{position:'relative',width:'100%', maxWidth:"780px",aspectRatio:'70/45'}}>
      <Image
      src={item.thumbnail}
      alt="Picture of the author"
      loading="lazy"
      layout="fill"
      size="(max-width:768px) 100vh, 700px"
      objectFit="contain"
      objectPosition="center"
    
    />
      </Box>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
             {item.brand}
            </Typography>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.category}
            </Typography>
         <Box display={'flex'}>
         <Typography variant="h5">
         ${item.price}            
            </Typography>
            <Typography variant="body1" px={1}>
         {item.discountPercentage}% off            
            </Typography>
         </Box>
            <Rating name="read-only" value={item.rating} precision={0.5} readOnly />
          </CardContent>
          <CardActions>
           <Link href={"/product/"+item.title}> <Button size="small">View Details</Button></Link>
          </CardActions>
        </Card>
   </Grid>
      ))}
      </Grid>
    </>
  );
};

export default Product;
