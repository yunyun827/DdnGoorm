import "./navigation.css";
import Link from "next/link";

const Logo = () => {
  return <></>;
};

const Navigation = () => {
  return (
    <>
      <Logo />
      		<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
    </>
  );
};

export default Navigation;
