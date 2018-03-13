import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

const IndexPage = ({ data }) => (
  <div>
    <Hero title={data.allMarkdownRemark.edges[0].node.headings[0].value} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-3/">Go to page 2</Link>
  </div>
)

export const query = graphql`
query IndexH1Query {
  allMarkdownRemark(filter: {headings: {depth: {eq: 1}}}) {
    edges {
      node {
        headings (depth:h1){
          value
        }
      }
    }
  }
}`

export default IndexPage
