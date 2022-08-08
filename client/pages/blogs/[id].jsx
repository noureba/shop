import React from 'react'
import Layout from '../../components/Layout'
import SingleBlog from '../../components/SingleBlog'
import Blogs from '../../components/Blogs'

export async function getStaticPaths() {

  const res = await fetch("http://localhost:3000/api/blogs")
  const blogs = await res.json()  
    
  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString()},
  }))
    
  return {
    paths,
    fallback: true 
  };
}

export async function getStaticProps({params}){
  const resById = await fetch("http://localhost:3000/api/blogs/"+ params.id)
  const res = await fetch("http://localhost:3000/api/blogs/")

  const blog = await resById.json()
  const blogs = await res.json()


  return {
    props: {blog, blogs}
  }
}

function Product({blog, blogs}) {

  return (
    <Layout title={blog[0].title}>
      <SingleBlog blog={blog[0]}/>
      <Blogs blogs={blogs} title="Realted Blogs" start={0} end={3} />
    </Layout>
  )
}

export default Product