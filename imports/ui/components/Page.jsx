// @flow

// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Container } from 'reactstrap';
import { PageHeader } from './PageHeader';
import { TalkToSomeoneButton } from './TalkToSomeoneButton';
import { AllSellers } from './AllSellers';
import { TermsAndConditions } from './TermsAndConditions';

//TODO render error
//TODO write which props are required
const Page = ({ sellersWithItems, error }) =>
  <Container fluid className='page'>
    <PageHeader/>
    <TalkToSomeoneButton/>
    <AllSellers sellersWithItems={sellersWithItems}/>
    <TermsAndConditions/>
  </Container>;

export default Page;
