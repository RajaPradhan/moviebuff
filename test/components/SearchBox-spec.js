import { SearchBox } from '../../src/components/SearchBox';

describe('SearchBox Component', () => {
  it('should render SearchBox component', () => {
    const wrapper = renderComponent(shallow, SearchBox);
    expect(wrapper.length).to.equal(1);
  });

  it('should handle search', () => {
    const event = {
      keyCode: 13,
      target: {
        value: 'spider'
      }
    };

    const props = {
      setMoviesCategory: function() {},
      fetchSearchResults: () => {}
    };

    const setMoviesCategorySpy = spy(props, 'setMoviesCategory');
    const fetchSearchResultsSpy = spy(props, 'fetchSearchResults');

    const wrapper = renderComponent(shallow, SearchBox, props);
    wrapper.instance().handleSearch(event);

    expect(setMoviesCategorySpy).to.have.been.calledOnce;
    expect(fetchSearchResultsSpy).to.have.been.calledOnce;
  });
});
