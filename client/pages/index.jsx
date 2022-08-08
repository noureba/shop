import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Collections from "../Components/Collections";
import Products from "../Components/Products";
import Deal from "../components/Deals/Deal";
import Blogs from "../components/Blogs";

export async function getStaticProps() {
  const resP = await fetch("http://localhost:3000/api/products");
  const resB = await fetch("http://localhost:3000/api/blogs");
  const products = await resP.json();
  const blogs = await resB.json();

  return {
    props: { products, blogs },
  };
}

function Home({ products, blogs }) {
  return (
    <Layout title="Home" description="">
      <Slider />
      <Collections />
      <Products products={products} title="Last Products" start={0} end={6} />
      <Deal />
      <Blogs blogs={blogs} start={0} end={3} title="Last Blogs"/>
    </Layout>
  );
}

export default Home;


