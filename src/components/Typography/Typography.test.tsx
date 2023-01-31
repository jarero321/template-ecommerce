import Typography from './Typography';
import { render, screen } from '@testing-library/react';

describe('Typography functional test', () => {
  beforeEach(() => {
    render(<Typography colors="canceled" size="2xl" />);
  });

  it('Should render', () => {
    expect(
      screen.getAllByText(
        (_content, element) => element?.tagName.toLowerCase() === 'div'
      )
    ).toBeTruthy();
  });

  it('Should show children text', () => {
    render(
      <Typography colors="canceled" size="2xl">
        {' '}
      </Typography>
    );
    expect(
      screen.getAllByText(
        (_content, element) => element?.tagName.toLowerCase() === 'span'
      )
    ).toBeTruthy();
  });

  it('Should dont show children text', () => {
    render(<Typography colors="canceled" size="2xl" />);
    expect(
      screen.queryByText(
        (_content, element) => element?.tagName.toLowerCase() === 'span'
      )
    ).toBeFalsy();
  });
});
