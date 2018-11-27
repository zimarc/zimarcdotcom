import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>
      <>
        
      </>
    </Header>
    <Container type="text">
    <h1 >Hi! We Are Zimarc from Los Angeles</h1>
					<p> 
						Zimarc is an experimental architecture design studio focus on innovative built 
						environment and exploring design efficiency through 
						digital fabrication and advanced manufacturing.
					</p>
    </Container>
  </Layout>
);

export default About;
