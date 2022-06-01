import styled from 'styled-components';
import { useDefiDashboard } from '@eth-boilerplate/hooks';
import { Button } from '@eth-boilerplate/ui';
const StyledApp = styled.div`
  display: grid;
  place-content: center;
`;



export function App() {
  const { func } = useDefiDashboard()
  return (
    <StyledApp>
      <Button onClick={func} />
    </StyledApp>
  );
}

export default App;
