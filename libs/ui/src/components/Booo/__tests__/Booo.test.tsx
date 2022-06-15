import { render } from '@testing-library/react';

import Booo from '../Booo';

describe('Booo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Booo />);

    expect(baseElement).toBeTruthy();
  });
});
