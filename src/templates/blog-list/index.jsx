import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Posts from '../../components/posts';
import { Pagination, Page, StyledLink, StyledArrow } from './styles';

const Home = ({ data, navigate, location, pageContext }) => {
  const posts = data.allMdx.edges;
  const { description } = data.site.siteMetadata;
  const localSearchBlog = data.localSearchBlog;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/${(currentPage - 1).toString()}`;
  const nextPage = `/${(currentPage + 1).toString()}`;
  return (
    <Layout location={location} description={description}>
      <SEO title="Posts" />
      <Posts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
      {numPages > 1 && (
        <Pagination>
          {!isFirst && (
            <StyledArrow to={prevPage} rel="prev">
              &#x2039;
            </StyledArrow>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <Page key={`pagination-number${i + 1}`}>
              <StyledLink to={`/${i === 0 ? '' : i + 1}`} isActive={i + 1 === currentPage}>
                {i + 1}
              </StyledLink>
            </Page>
          ))}
          {!isLast && (
            <StyledArrow to={nextPage} rel="next">
              &#x203A;
            </StyledArrow>
          )}
        </Pagination>
      )}
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        description
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "es_ES")
            title
            description
          }
        }
      }
    }
  }
`;
