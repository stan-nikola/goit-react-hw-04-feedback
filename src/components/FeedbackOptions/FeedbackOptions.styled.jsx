import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  svg {
    width: 60px;
    height: 60px;
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
    background-color: ${p => p.theme.colors.iconBg};
    transition: scale 250ms linear, box-shadow 250ms linear;
    &:hover,
    &:focus {
      scale: 1.03;
      box-shadow: ${p => p.theme.shadows.items};
    }
  }
`;
