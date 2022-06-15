import { BoooProps } from "./Booo.types"
import styles from './Booo.styles';

const { DivStyled } = styles;

export const Booo: React.FC<BoooProps> = () => {
  return (
    <DivStyled 
      className="Booo"
      data-testid="test-Booo"
    >
    </DivStyled>
  );

};

export default Booo;
