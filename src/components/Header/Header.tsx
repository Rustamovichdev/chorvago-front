import CategoryNav from "./CategoryNav";
import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import RegionSelect from "./RegionSelect";
import SearchBar from "./SearchBar";


function Header() {
    return <header className="border-b  border-gray-300 bg-white">
        <div className="flex items-center max-w-300 mx-auto gap-4 px-4 py-3">
            <Logo />
            <RegionSelect />
            <SearchBar />
            <HeaderActions/>
        </div>
        <CategoryNav/>
    </header>
}
export default Header;