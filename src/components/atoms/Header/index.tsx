import React from "react";

import Link from "next/link";

import Container from "../Container";
import HeaderImage from "../HeaderImage";
import Social from "../Social";
import H1 from "../H1";
import P from "./P";
import Anchor from "./Anchor";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <H1>
          <Link href="/">
            <Anchor>blog</Anchor>
          </Link>
        </H1>
      </Wrapper>
    </Container>
  );
};

export default Header;
