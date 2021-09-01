import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Nft from 'components/Nft';


test('nft rendering', () => {
  const id = '43458219'
  const name = 'PX92/99';
  const image = 'https://lh3.googleusercontent.com/8djHC6BkXfeJFYQdhyK70tCOxhbe8EyMrJarDkysAdYEKVLvzlevPimtBy9Hnx53eweIFZ9TcqQgqiiow3LdQO8Yw9qNr6BrGonF=s250';
  
  const component = render(<Nft id={id} name={name} image={image}/>)

  component.getByTestId(id)
  expect(component.container).toHaveTextContent(name)
  component.getByRole('img', {src:image})
});

test('scroll down call ref to do infinite scroll', () => {
  const id = '43458219';
  const name = 'PX92/99';
  const image = 'https://lh3.googleusercontent.com/8djHC6BkXfeJFYQdhyK70tCOxhbe8EyMrJarDkysAdYEKVLvzlevPimtBy9Hnx53eweIFZ9TcqQgqiiow3LdQO8Yw9qNr6BrGonF=s250';

  const mockRef = jest.fn()

  const component = render(<Nft id={id} name={name} image={image} lastRefAsset={mockRef}/>)

  const div = component.getByTestId(id)
  fireEvent.scroll(div)

  expect(mockRef).toHaveBeenCalledTimes(1)
})