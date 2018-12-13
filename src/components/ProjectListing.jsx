import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import sample from 'lodash/sample';
import { overlay } from '../../config/theme';

const Wrapper = styled.div`
  -webkit-animation: random 60s infinite;
  animation: random 60s infinite;
  @keyframes  random {
    5% { background-color: white; }  
    20% { background-color: #ACDBC9; } 
    30% { background-color: #547980; } 
    40% { background-color: #45ada8; }
    60% { background-color: black; }  
    70% { background-color: #2a363b; } 
    80% { background-color: #ff847c; } 
    90% { background-color: #99b898; } 
  } 
    

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
`;


const Item = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    opacity: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const ProjectListing = ({ projectEdges }) => (
  <Wrapper >
    {projectEdges.map(project => {
      const overlayColor = sample(overlay);
      return (
        <Item key={project.node.fields.slug}>
          <Content>
            <ImageWrapper>
              <Img fluid={project.node.frontmatter.cover.childImageSharp.fluid} />
            </ImageWrapper>
            <Link to={project.node.fields.slug}>
              <Overlay style={{ backgroundColor: overlayColor, opacity:0.7 }} />
              <h2>{project.node.frontmatter.title}</h2>
              <div>{project.node.frontmatter.category}</div>
            </Link>
          </Content>
        </Item>
      );
    })}
  </Wrapper>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired,
};
