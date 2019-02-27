import React from 'react';
import renderer from 'react-test-renderer';
import FormLanding from './FormLandingPage.component';

describe(FormLanding, () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<FormLanding />);
    expect(tree).toMatchSnapshot();
  });
});
