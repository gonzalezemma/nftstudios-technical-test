import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Banner from 'components/Banner';
import useCollection from 'hooks/useCollection';

jest.mock('../hooks/useCollection')

describe('<Banner>', () => {
 beforeEach(() => {
   const collection = {
      name: 'PixelChain',
      url: 'https://pixelchain.art/',
      banner_image_url: 'https://lh3.googleusercontent.com/4kGbC2YEK-9pgWSF3PFp_PWXQ3ga6SmX1aN-RYQmLCIHtHvTqAf8ZhfbANev3XlVF5iMKEPbU-LcjO8p9oRtGnDGdw_bzqMYlxcZ4A=s2500',
      image_url: 'https://lh3.googleusercontent.com/ZcRiTnRewjZlPRn7sJtW6A4kiq_37ozjmh4KhrvlA2sEmcywbi4o1pcnoi6IOQTvHEQuQoIFQ6hU5rhfQHmMlZI=s120'
    }
   useCollection.mockImplementation(() => collection)
 })

  it('show display banner', () => {
    render(<Banner/>)
    expect(screen.getByTestId('container-banner')).toBeInTheDocument()
  })

  it('show banner image', () => {
    render(<Banner/>)
    expect(screen.getByAltText('banner-img')).toBeInTheDocument()
  })

  it('show collection nft image', () => {
    render(<Banner/>)
    expect(screen.getByAltText('collection-img')).toBeInTheDocument()
  })

  it('show name of collection', () => {
    render(<Banner/>)
    expect(screen.getByText('PixelChain')).toBeInTheDocument()
  })
})