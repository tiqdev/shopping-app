import CartIconButton from "./cart-button";
import Logo from "./logo";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-primary text-white w-full flex flex-col items-start justify-center gap-2 sm:py-1.5 py-3 sm:px-3 px-3 sticky top-0 z-20">
        <div className="flex justify-between items-center w-full max-w-pagemax mx-auto gap-5">
          <Logo />
          <div className="flex-1 center-row sm:flex hidden">
            <SearchInput />
          </div>
          <CartIconButton />
        </div>
        {/*  For mobile screens */}
        <div className="w-full sm:hidden block mx-auto">
          <SearchInput />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
