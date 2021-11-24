import IconSettings from "./IconSettings";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow-sm bg-gradient-to-b from-gray-100">
      <Search />
      <IconSettings />
    </nav>
  );
};

export default Navbar;
