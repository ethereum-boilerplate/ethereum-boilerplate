import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiProps {}

const StyledSharedUi = styled.div`
  color: pink;
`;

export function SharedUi(props: SharedUiProps) {
  return (
    <StyledSharedUi>
      <h1>Welcome to SharedUi!</h1>
    </StyledSharedUi>
  );
}

export default SharedUi;
