import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
`;
