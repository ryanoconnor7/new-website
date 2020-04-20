import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Route } from "react-router-dom"
import BlogPage from "./blog"
const IndexPage = () => (
  <Layout>
    <Route path="/blog" component={BlogPage} />
    <SEO title="" />
    <h1>🚧Under Construction🚧</h1>
    <p>~some cool info about me here~</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <h1 id="projects">Projects</h1>
  </Layout>
)

export default IndexPage
