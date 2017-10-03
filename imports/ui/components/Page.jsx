// @flow

// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Container } from 'reactstrap';
import { PageHeader } from './PageHeader';
import { TalkToSomeoneButton } from './TalkToSomeoneButton';
import { Sellers } from './Sellers';
import { TermsAndConditions } from './TermsAndConditions';

//TODO render error
//TODO write which props are required
const Page = ({ sellersWithItems, error }) =>
  <Container fluid className='page'>
    <PageHeader/>
    <TalkToSomeoneButton/>
    <Sellers sellersWithItems={sellersWithItems}/>
    <TermsAndConditions/>
  </Container>;
Page.propTypes = {
  sellersWithItems: PropTypes.array,
  error: PropTypes.string
};

export default Page;
