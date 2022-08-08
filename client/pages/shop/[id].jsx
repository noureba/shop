import React from 'react'
import Layout from '../../components/Layout'
import SingleProduct from '../../components/SingleProduct'
import Products from '../../components/Products'
import {Box} from '@mui/material'

export async function getStaticPaths() {

  const res = await fetch("http://localhost:3000/api/products")
  const products = await res.json()  
    
  const paths = products.map((product) => ({
    params: { id: product.id.toString()},
  }))
    
  return {
    paths,
    fallback: true 
  };
}

export async function getStaticProps({ params }){
  const resById = await fetch("http://localhost:3000/api/products/"+ params.id)
  const res = await fetch("http://localhost:3000/api/products/")

  const product = await resById.json()
  const products = await res.json()


  return {
    props: {product, products}
  }
}

function Product({product, products}) {

  const RealtedProducts = products.filter((pro)=>{
    return product[0].category === pro.category && pro.id !== product[0].id
  })

  return (
    <Layout title={product[0].title}>
      <SingleProduct product={product[0]}/>
      <Box>
        <Products products={RealtedProducts} title="Realted Products" start={0} end={3} />
      </Box>
    </Layout>
  )
}

export default Product