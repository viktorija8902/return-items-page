// @flow

// Framework
import React from 'react';

// Components
import { Container } from 'reactstrap';
import { PageHeader } from './PageHeader';
import { TalkToSomeoneButton } from './TalkToSomeoneButton';
import { AllSellers } from './AllSellers';
import { TermsAndConditions } from './TermsAndConditions';

export const Page = ({ children }) =>
  <Container fluid className='page'>
    <PageHeader/>
    <TalkToSomeoneButton/>
    <AllSellers/>
    <TermsAndConditions/>
  </Container>;

export default Page;
