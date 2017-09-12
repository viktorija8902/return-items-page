// @flow

// Framework
import React from "react";

// Components
import { Container } from "reactstrap";

export const Page = ({ children }) =>
  <Container fluid className="page">
    {children}
  </Container>;

export default Page;
