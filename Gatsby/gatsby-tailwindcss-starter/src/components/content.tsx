import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

function ContentComponent({ }) {

    const data = useStaticQuery(
        graphql`query SiteContent {
        site {
            siteMetadata {
                title
            }
        }
        }
    `)

    return (
        <div>
            <p>{data.site.siteMetadata.title}</p>
        </div>
    )
}

export default ContentComponent;