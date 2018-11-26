import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, SEO, Layout } from 'components';
import sample from 'lodash/sample';
import config from '../../config/website';
import { overlay } from '../../config/theme';

const overlayColor = sample(overlay);

const Wrapper = styled.section`
  text-align: center;
  position: relative;
  width: 100%;
  color: gray;
  padding: 0rem ${props => props.theme.spacer.horizontal};
  margin-bottom: 1rem;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacer.vertical} ${props => props.theme.spacer.horizontal} 0
    ${props => props.theme.spacer.horizontal};
`;

const Top = styled.div`
  font-size: 1%;
  margin-bottom: 0rem;
  position: relative;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  font-size: 120%;
`;

const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const project = postNode.frontmatter;
  return (
    <Layout>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper style={{ backgroundColor: 2252 }}>
        <InformationWrapper>
        <InfoBlock>
            <Top></Top>
            <Bottom>{project.title}</Bottom>
          </InfoBlock>
          <InfoBlock>
            <Top></Top>
            <Bottom>{project.date}</Bottom>
          </InfoBlock>
          <InfoBlock>
            <Top></Top>
            <Bottom>{project.category}</Bottom>
          </InfoBlock>
        </InformationWrapper>
      </Wrapper>
      <Container type="text">
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MM.YYYY")
        category
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
