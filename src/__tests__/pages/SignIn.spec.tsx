import React from 'react';
import { render } from '@testing-library/react';
import Sigin from '../../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Sigin Page', () => {
  it('Should be able to sign in', () => {
    const { debug } = render(<Sigin />);

    debug();
  });
});
