import styled from 'styled-components';
import { Div } from '../../../style-system/components';

export const DetailChartContainer = styled(Div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`;

export const ChartCard = styled(Div).attrs({
  borderRad: 2,
  space: { p: 2 },
  shadow: 2,
})`
  background-color: #ffffff;
`;
