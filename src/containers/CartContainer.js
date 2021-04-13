import Cart from "../components/Cart";
import { connect } from "react-redux";
import { removeFromCart } from "../service/Actions/action";

const mapStateToProps = (state) => ({
  cardData: state.cardItem,
});
const mapDispatchToProps = (dispatch) => ({
  removeFromCartHandler: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default Home;
