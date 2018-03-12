import React from 'react'
import Link from 'gatsby-link'

export const ThirdPage = ({ data }) => {
  console.log(data);
  return (
    <div>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
  )
}

export const query = graphql`
query MarkdownQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
}`

export default ThirdPage
