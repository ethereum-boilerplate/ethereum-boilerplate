import { render } from '@testing-library/react';

import Tabs from '../Tabs';

describe('Tabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tabs />);

    expect(baseElement).toBeTruthy();
  });
});
