import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  MainHeading,
  Column,
  Row,
  TextWrapper,
} from "../../globalStyle";
import { BiPlayCircle } from "react-icons/bi";
import {
  HeroSection,
  ButtonContainer,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroSection id='hero'>
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Every Create Music </MainHeading>
            <TextWrapper
              color="white"
              size="clamp(1rem,3vw,1.3rem)"
              margin="0 0 2rem"
              lineHeight="1.1rem"
              maxwidth='480px'
              align="center"
            >
              Discover , stream and share a constantly expanding mix of music
              from emerging and major artists around the world
            </TextWrapper>

            <ButtonContainer>

              <Link to="sign-up">
                <Button big fontBig>
                  Get started
                </Button>
              </Link>

              <Button big fontBig>
                <BiPlayCircle size="2.3rem"></BiPlayCircle>
              </Button>
            </ButtonContainer>

         
        </Column>
      </Row>
    </HeroSection>
  );
}

export default Hero;

