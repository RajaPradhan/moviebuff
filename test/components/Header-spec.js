import Header from '../../src/components/Header';
import SearchBox from '../../src/components/SearchBox';

describe('Header Container', () => {
  it('should render the Header component', () => {
    const wrapper = renderComponent(shallow, Header);
    expect(wrapper.find('nav').length).to.equal(1);
    expect(wrapper.find(SearchBox).length).to.equal(1);
  });
});
