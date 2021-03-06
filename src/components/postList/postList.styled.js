import styled from 'styled-components';
import { ContentWrapper } from '../../components/contentWrapper';
import { headerSize } from '../../components/theme';


export const PostListWrapper = styled(ContentWrapper)`
display:flex;
flex-direction:row;
justify-content:flex-start;
flex-wrap: wrap;
min-height: calc(100vh - ${headerSize});
`;
  