import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <>
        <h1>Contact</h1>
      </>
    </Header>
    <Container type="text">
      <h2>Contact me!</h2>
      <p>
        coming soon
      </p>
    </Container>
  </Layout>
);

export default Contact;
