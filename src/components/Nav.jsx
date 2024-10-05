import Logo_1 from "../assets/Home/logo_1.png"
import Search from "../assets/Home/search.svg"

const Nav = () => {
  return (
    <nav className=" bg-transparent text-white p-4 ml-4 mr-8 font-inter">
      <div className="container mx-auto flex justify-between mt-2 items-center">
        
          <a className="flex ml-8 items-center gap-2 text-white">
            <img
              src={Logo_1}
              width={45}
              height={30}
              alt="Logo"
            />
            <span className="font-medium text-2xl">SOLITARY</span>
          </a>

        
        <div className="flex-1 mx-4 flex justify-center">
          
          <div className="relative w-2/6">
            <button className="absolute left-0 top-0 h-full px-4 bg-custom-purple text-white rounded-tl-lg rounded-bl-lg">
            <img
                src={Search}
                width={30}
                height={30}
                alt="Search Icon"
              />
            </button>
            <input
              type="text"
              className="w-full px-20 py-2 rounded-lg text-black"
              placeholder="Search for the event"
            />
            
          </div>
        </div>
        
        <div className="mr-4 ">
          <button className="bg-custom-purple hover:bg-violet-800 text-white font-normal py-2 px-8 rounded-lg">
            Log In
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;