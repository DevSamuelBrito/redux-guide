import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  console.log({ currentUser });
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(loginUser({ email: "samuel@email.com", name: "Samuel" }));
  };

  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleClickLogout}>Sair</div>
        ) : (
          <div onClick={handleClickLogin}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
