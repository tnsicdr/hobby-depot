import { render } from '@testing-library/react';
import { Card } from './Card';

describe('<Card />', () => {
  it('should render children', () => {
    const { container } = render(<Card>test content</Card>);

    expect(container).toHaveTextContent('test content');
  });
});
