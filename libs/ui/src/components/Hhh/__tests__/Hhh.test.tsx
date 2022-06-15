import { render } from '@testing-library/react';

import Hhh from '../Hhh';

describe('Hhh', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hhh />);

    expect(baseElement).toBeTruthy();
  });
});
