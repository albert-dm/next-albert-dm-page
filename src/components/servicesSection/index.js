import CardContainer from '../cardContainer';
import { Container } from '../container';
import { SevicesSectionWrapper } from './servicesSection.style';

export const ServicesSection = ({services}) => {
  return <Container dark>
    <SevicesSectionWrapper>
      <h2>{'>'}services</h2>
      <CardContainer cards={services} />
    </SevicesSectionWrapper>
  </Container>;
};