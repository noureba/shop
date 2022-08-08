import React from 'react'
import Layout from '../../components/Layout'
import PaginatedItems from '../../components/Paginate'

export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/blogs")
  const blogs = await res.json()

  return {
    props: {blogs}
  }
}

function index({blogs}) {
  return (
    <Layout title="Blogs">
      <PaginatedItems itemsPerPage={12} items={blogs} component="blogs" title="" />
    </Layout>
  )
}

export default index