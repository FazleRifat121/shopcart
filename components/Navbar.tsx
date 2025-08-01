import { currentUser } from "@clerk/nextjs/server";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavButton from "./FavButton";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between my-7">
          <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
            <MobileMenu />
            <Logo />
          </div>
          <NavMenu />
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
            <SearchBar />
            <CartIcon />
            <FavButton />
            <ClerkLoaded>
              <SignedIn>
                <UserButton />
              </SignedIn>
              {!user && <SignIn />}
            </ClerkLoaded>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
