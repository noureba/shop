import React from 'react'
import Layout from '../../components/Layout'
import PaginatedItems from '../../components/Paginate'


export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/products")
  const products = await res.json()

  return {
    props: {products}
  }
}


function Shop({products}) {
  return (
    <Layout title="Products">
      <PaginatedItems itemsPerPage={12} items={products} component="products"/>
    </Layout>
  )
}

export default Shop