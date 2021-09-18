import IconSettings from "./IconSettings";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Search />
      <IconSettings />
    </nav>
  );
};

export default Navbar;
