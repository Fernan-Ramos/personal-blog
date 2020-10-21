import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const Home = ({ data, navigate, location }) => {
  const posts = data.allMdx.edges;
  const { title, description, boldTitle } = data.site.siteMetadata;
  const localSearchBlog = data.localSearchBlog;
  console.log(data);
  return (
    <Layout location={location} title={title} description={description} boldTitle={boldTitle}>
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
        boldTitle
        description
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
