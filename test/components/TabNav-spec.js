import { TabNav } from '../../src/components/TabNav';

describe('TabNav Component', () => {
  it('should render TabNav component', () => {
    const wrapper = renderComponent(shallow, TabNav);
    expect(wrapper.length).to.equal(1);
  });

  it('should handle tab change', () => {
    const event = {
      target: {
        textContent: 'Now playing'
      }
    };

    const props = {
      setMoviesCategory: () => {},
      fetchNowPlayingMovies: () => {},
      fetchTopRatedMovies: () => {},
      fetchUpcomingMovies: () => {}
    };

    // Register spies before rendering the component else it doesn't work
    const spySetMoviesCategory = spy(props, 'setMoviesCategory');
    const spyFetchNowPlayingMovies = spy(props, 'fetchNowPlayingMovies');
    const spyFetchTopRatedMovies = spy(props, 'fetchTopRatedMovies');
    const spyFetchUpcomingMovies = spy(props, 'fetchUpcomingMovies');

    const wrapper = renderComponent(shallow, TabNav, props);

    wrapper.instance().handleTabChange(event);
    expect(spySetMoviesCategory).to.have.been.calledOnce;
    expect(spyFetchNowPlayingMovies).to.have.been.calledOnce;

    event.target.textContent = 'Top rated';
    wrapper.instance().handleTabChange(event);
    expect(spyFetchTopRatedMovies).to.have.been.calledOnce;

    event.target.textContent = 'Upcoming';
    wrapper.instance().handleTabChange(event);
    expect(spyFetchUpcomingMovies).to.have.been.calledOnce;

    spySetMoviesCategory.restore();
    spyFetchNowPlayingMovies.restore();
    spyFetchTopRatedMovies.restore();
    spyFetchUpcomingMovies.restore();
  });
});
