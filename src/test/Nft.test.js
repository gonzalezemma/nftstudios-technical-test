import { render, screen } from '@testing-library/react';
import Nft from 'components/Nft/Nft';

const props = {
  id: '43458219',
  name: 'PX92/99',
  image_preview_url: "https://lh3.googleusercontent.com/8djHC6BkXfeJFYQdhyK70tCOxhbe8EyMrJarDkysAdYEKVLvzlevPimtBy9Hnx53eweIFZ9TcqQgqiiow3LdQO8Yw9qNr6BrGonF=s250",
  lastRefAsset: false
}

test('nft rendering', () => {
  render(<Nft/>, {props});

  const nftComponent = screen.getByTestId('nft-test');
  expect(nftComponent).toBeInTheDocument();
  expect(nftComponent).toBeVisible()
});