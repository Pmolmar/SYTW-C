// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AutorComponent from "../components/autor"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="Informacion" />
    <h1>Informacion</h1> 
    <AutorComponent name={"Pablo Molina Martinez"} />
  </Layout>
)

export default AboutPage
