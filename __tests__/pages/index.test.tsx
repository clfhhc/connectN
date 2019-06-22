import React from 'react';
import { NextComponentType } from 'next';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from '../../pages/_app';
import Index from '../../pages/index';

const AppWrapper = (child: NextComponentType<any> | React.ComponentType<any>, pageProps: any) =>
  mount(<App Component={child} pageProps={pageProps} />);

describe('Pages', () => {
  describe('Index', () => {
    let TestIndexWrapper: ReactWrapper;
    it('should render without throwing an error', () => {
      act(() => {
        TestIndexWrapper = AppWrapper(Index, { pathname: '/' });
      });
      expect(TestIndexWrapper.find('h1').text()).toBe('Index');
    });
  });
});
