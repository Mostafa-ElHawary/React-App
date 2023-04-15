import styled, { createGlobalStyle } from "styled-components";
// import "./normalize.css";

const color = {
  midnight: "#141514",
  gray: "#252425",
  green: "#4CE3A0",
  snow1: "#FEFFFE",
  snow2: "#DBDBDB",
};

// const getSizeValue = (size) => {
//   if (size === "small") {
//     return "480px";
//   } else if (size === "medium") {
//     return "768px";
//   } else if (size === "large") {
//     return "1024px";
//   } else {
//     return "768px"; // default value
//   }
// };

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Montserrat' , sans-serif;
    font-family: 'Rubik', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    font-family: 'Work Sans', sans-serif;
}`;

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "#141514" : "#141514")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

// export const MainHeading = styled.h1`
//   font-size: clamp(2.3rem, 6vw, 4.5rem);
//   margin-bottom: 2rem;
//   color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
//   width: 100%;
//   letter-spacing: 4px;
//   text-align: center;
// `;

export const TextWrapper = styled.h2`
  color: ${(props) => (props.snow1 ? color.snow1 : color.snow1)};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;

// section Heading size start

export const Heading = styled.h1`
  /* font-size: clamp(1.3rem, 13vw, 3.1rem); */
  font-size: ${({ size }) => (size ? size : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${(props) => (props.snow2 ? color.snow2 : color.snow2)};
  line-height: 1.06;
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  width: ${({ width }) => (width ? width : "100%")};
  /* font-weight: ${({ weight }) => (weight ? weight : "")}; */
  font-weight: ${(props) => props.weight};

  /* Media query */
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
`;

export const HeadingSize2 = styled.h2`
  /* font-size: clamp(1.3rem, 13vw, 3.1rem); */
  font-size: ${({ size }) => (size ? size : "100%")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${(props) => (props.snow2 ? color.snow2 : color.snow2)};
  line-height: 1.06;
  width: ${({ width }) => (width ? width : "100%")};

  /* Media query */
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
  @media (max-width: ${(props) => props.mobileBreakpoint}) {
    font-size: ${({ size }) => (size ? size : "100%")};
  }
`;

// section Heading size end

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  */ &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
  background: ${(props) => (props.x === "outline" ? " red " : "blue")};
`;

export default GlobalStyle;

// export const Container = styled.div`
// export const MainHeading = styled.h1`
// export const Heading = styled.h2`
// export const TextWrapper = styled.span`
// export const Section = styled.section`
// export const Row = styled.div`
// export const Column = styled.div`
// export const Button = styled.button`