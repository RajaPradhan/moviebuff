import Home from '../../src/containers/Home';
import SideBar from '../../src/containers/SideBar';
import MainArea from '../../src/containers/MainArea';

describe('Home container', () => {
  it('should render Home component', () => {
    const wrapper = renderComponent(shallow, Home);
    expect(wrapper.find('div').hasClass('row')).to.be.true;
    expect(wrapper.find(SideBar).length).to.equal(1);
    expect(wrapper.find(MainArea).length).to.equal(1);
  })
});
