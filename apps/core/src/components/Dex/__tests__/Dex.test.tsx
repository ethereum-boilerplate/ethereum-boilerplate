import { render } from '@testing-library/react';

import Dex from '../Dex';

describe('Dex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dex />);

    expect(baseElement).toBeTruthy();
  });
});
