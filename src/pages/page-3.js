import React from 'react'
import Link from 'gatsby-link'

export const ThirdPage = ({ data }) => {
  console.log(data);
  return (
    <div>
    <h1>{data.allMarkdownRemark.edges[0].node.headings[0].value}</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
  )
}

export const query = graphql`
query h1Query {
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

export default ThirdPage
