import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Spinner from 'components/Spinner';


test('spinner rendering', () => {
  
  const component = render(<Spinner />)
  expect(component.getByTestId('spinner')).toBeInTheDocument();
});