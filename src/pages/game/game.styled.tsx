import styled from 'styled-components';

import styles from 'src/styles';

const { colors } = styles;

interface TitleProps {
  hasWinner: boolean;
}

export const Container = styled.div`
  max-width: 1024px;
  padding-top: 100px;
  margin: auto;
`;

export const Title = styled.h3<TitleProps>`
  color: ${(props) => props.hasWinner && colors.red};
`;

export const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
