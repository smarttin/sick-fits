import PleaseSignin from '../components/PleaseSignin';
import OrderList from '../components/OrderList';

const orderListPage = (props) => (
  <div>
    <PleaseSignin>
      <OrderList />
    </PleaseSignin>
  </div>
);

export default orderListPage;
