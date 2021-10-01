import { render } from '@testing-library/react';

import Ui from './index';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruth();
  });
});
