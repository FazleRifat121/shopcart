import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between my-7">
          <Logo />
          <NavMenu />
          <div>others</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
