import { SideBar } from '../../src/containers/SideBar';

describe('SideBar Container', () => {
  it('should render SideBar container', () => {
    const wrapper = renderComponent(shallow, SideBar);
    expect(wrapper.length).to.equal(1);
  });

  it('should render filters', () => {
    const wrapper = renderComponent(shallow, SideBar);
    expect(wrapper.find('#nowPlayingMovies')).to.have.length(1);
  });

  it('should render genres', () => {
    const wrapper = renderComponent(shallow, SideBar);
    expect(wrapper.find('.filled-in')).to.have.length(10);
  });

  it('should simulate filter change', () => {
    //const spyFn = spy(SideBar.prototype, 'handleMoviesCategoryChange');
    const stubFn = stub(SideBar.prototype, 'handleMoviesCategoryChange')
    const wrapper = renderComponent(shallow, SideBar);
    wrapper.find('#nowPlayingMovies').simulate('change');
    //expect(spyFn).to.have.been.calledOnce;
    stubFn.restore();
  });

  it('should call handleMoviesCategoryChange', () => {
    const props = {
      setMoviesCategory: function() {},
      fetchNowPlayingMovies: function() {}
    };
    const event = {
      target: {
        value: 'nowPlayingMovies'
      }
    };
    const spySetMoviesCategory = spy(props, 'setMoviesCategory');
    const spyFetchNowPlayingMovies = spy(props, 'fetchNowPlayingMovies');
    const wrapper = renderComponent(shallow, SideBar, props);
    const stubSetState = stub(wrapper.instance(), 'setState');
    wrapper.instance().handleMoviesCategoryChange(event);
    expect(spySetMoviesCategory).to.have.been.calledOnce;
    expect(spyFetchNowPlayingMovies).to.have.been.calledOnce;

    spySetMoviesCategory.restore();
    spyFetchNowPlayingMovies.restore();
    stubSetState.restore();
  });
});
