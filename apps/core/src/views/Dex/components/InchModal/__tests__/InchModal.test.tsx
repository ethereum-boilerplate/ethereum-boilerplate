import { render } from '@testing-library/react';

import InchModal from '../InchModal';

describe('InchModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InchModal />);

    expect(baseElement).toBeTruthy();
  });
});
