const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-2 p-4">
        {/* brand-container */}
        <div>
        <a className="btn md:text-2xl text-xl font-bold">Captain Table</a>
        </div>
    {/* lg-screen */}
  <div className="hidden lg:flex">
    {/* large-screen */}
    <ul className="menu menu-horizontal px-1 md:text-xl text-lg font-bold">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
    </ul>
  </div>
  {/* search-input */}
  <div className="flex items-center gap-5">
  <input type="text" placeholder="Search here" className="hidden md:block input input-bordered w-full max-w-fit" />
  <h3 className="text-green-400 ring-2 ring-green-400 rounded-full px-2 py-1"><i className="fa-solid fa-user"></i></h3>
  </div>
  {/* sm-dropdown */}
  <div className="block lg:hidden">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-10">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Navbar
