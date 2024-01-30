import Search from "./Search.jsx";
import UserList from "./UserList.jsx";

const SlideBar = () => {
  return (
    <div className="flex flex-col w-2/6 border-r-2 overflow-y-auto">
      {/* <!-- search compt --> */}
      <Search />
      {/* <!-- end search compt -->
        <!-- user list --> */}
      <UserList />
      {/* <!-- end user list --> */}
    </div>
  );
};
export default SlideBar;
