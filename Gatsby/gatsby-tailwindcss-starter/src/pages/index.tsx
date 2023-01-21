// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentComponent from "../components/content"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Inicio</h1>
    <ContentComponent  ></ContentComponent>
    <Link to="http://localhost:8000/___graphql">Enlace a GraphQL Editor</Link>
  </Layout>
)

export default IndexPage
