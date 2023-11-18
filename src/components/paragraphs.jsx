/* eslint-disable */
import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0.25rem 0;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Bold = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
`;

export function Paragraph({children}) {
  if(typeof children === "string") {
    return children
      .split("\n")
      .map((line, i) => (
        <P key={line.substring(0, 5) + "_" + i}>{line}</P>
      ));
  }
  return <P>
    {children}
  </P>
}