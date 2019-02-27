import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar.component';

describe(NavBar, () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
});
