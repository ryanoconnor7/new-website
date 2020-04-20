import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Iframe from 'react-iframe'


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSfnAgilzfJDBK9DQIo4bgMQf2bfgOjuQKoZKvTFmP2hRYayCA/viewform?embedded=true" 
    width="100%" 
    height={1300} 
    frameBorder={0}/>
  </Layout>
)

export default SecondPage
