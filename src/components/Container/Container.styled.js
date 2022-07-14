import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: auto;
  @media ${breakpoints.maxTablet} {
    width: 320px;
    padding: 0 20px;
  }
  @media ${breakpoints.tablet} {
    width: 768px;
    padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;
