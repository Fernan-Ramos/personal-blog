import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const Home = ({ data, navigate, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const localSearchBlog = data.localSearchBlog;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Posts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
