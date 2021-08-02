import React from 'react';
import { render } from '@testing-library/react';
import NameControls from '../components/controls/NameControls';

describe('test functionality for NameControls Component', () => {
  it('renders the name input to display', () => {
    const { asFragment } = render (
      <NameControls text=""
      />
    );
    expect(asFragment()).toMatchSnapshot();
  }
  );
}
);
