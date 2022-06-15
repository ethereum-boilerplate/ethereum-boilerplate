import { render } from '@testing-library/react';

import Blalblalb from '../Blalblalb';

describe('Blalblalb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Blalblalb />);

    expect(baseElement).toBeTruthy();
  });
});
