import React from 'react';
import renderer from 'react-test-renderer';
import CreateForm from './CreateForm.component';

describe(CreateForm, () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<CreateForm />);
    expect(tree).toMatchSnapshot();
  });
});
