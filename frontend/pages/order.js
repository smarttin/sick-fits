import PleaseSignin from '../components/PleaseSignin';
import Order from '../components/Order';

const orderPage = (props) => (
  <div>
    <PleaseSignin>
      <Order id={props.query.id} />
    </PleaseSignin>
  </div>
);

export default orderPage;
