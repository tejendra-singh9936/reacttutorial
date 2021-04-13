import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../service/Actions/action";
const mapStateToProps = (state) => ({
  cardData: state.cardItem,
});
const mapDispatchToProps = (dispatch) => ({
  addToCardHAndlers: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
