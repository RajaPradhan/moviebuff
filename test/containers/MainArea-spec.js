import { MainArea } from '../../src/containers/MainArea';
import Loading from '../../src/components/Loading';
import Card from '../../src/components/Card';

let props = {
  movies: {
    moviesCategory: 'nowPlayingMovies',
    nowPlayingMovies: {
      results: []
    },
  },
  fetchNowPlayingMovies: function() {}
};

describe('MainArea container', () => {
  it('should render MainArea container', () => {
    const spyFn = spy(MainArea.prototype, 'componentDidMount');
    const wrapper = renderComponent(shallow, MainArea, props);
    expect(spyFn).to.have.been.calledOnce;
  });

  it('should render MainArea container with loader', () => {
    const wrapper = renderComponent(shallow, MainArea, props);
    expect(wrapper.find(Loading).length).to.equal(1);
  });

  it('should render MainArea container with Card', () => {
    props.movies.nowPlayingMovies.results.push(1, 2, 3);
    const wrapper = renderComponent(shallow, MainArea, props);
    expect(wrapper.find(Card).length).to.equal(3);
  });
});
