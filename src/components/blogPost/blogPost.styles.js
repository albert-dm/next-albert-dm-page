import styled from 'styled-components';
import { ContentWrapper } from '../contentWrapper';
import { headerSize } from '../theme';

export const BlogPostWrapper = styled(ContentWrapper)`
    min-height: calc(100vh - ${headerSize});
    padding: 0 8px;
  `;