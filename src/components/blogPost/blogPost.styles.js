import styled from 'styled-components';
import { ContentWrapper } from '../contentWrapper';
import { headerSize } from '../theme';

export const BlogPostWrapper = styled(ContentWrapper)`
  min-height: calc(100vh - ${headerSize});
  padding: 0 8px;
  padding-bottom: 48px;

  .social-buttons {
    padding: 48px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 16px 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    * {
      margin-bottom: 16px;
    }
  }
`;
