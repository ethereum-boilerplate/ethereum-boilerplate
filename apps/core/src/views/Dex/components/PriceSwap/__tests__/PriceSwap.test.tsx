import { render } from '@testing-library/react';

import PriceSwap from '../PriceSwap';

describe('PriceSwap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PriceSwap />);

    expect(baseElement).toBeTruthy();
  });
});
