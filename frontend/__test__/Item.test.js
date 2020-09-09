import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ItemComponent from '../components/Item';

const fakeItem = {
  id: 'qwswedr',
  title: 'what i dread',
  price: 4000,
  description: 'testing is what i have to do so ...',
  image: 'test.jpg',
  largeImage: 'largeTestImage.jpg',
};

describe('<Item/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it('renders the image properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const img = wrapper.find('img');
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });

  // it('renders and displays properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const priceTag = wrapper.find('ForwardRef(PriceTag)');
  //   expect(priceTag.children().text()).toBe('$40');
  //   expect(wrapper.find('ForwardRef(Title) a').text()).toBe(fakeItem.title);
  // });

  // it('renders out the buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const buttonList = wrapper.find('.buttonList');
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.find('Link')).toHaveLength(1);
  //   expect(buttonList.find('AddToCart').exists()).toBe(true);
  //   expect(buttonList.find('DeleteItem').exists()).toBe(true);
  //   // console.log(buttonList.debug());
  // });
});
