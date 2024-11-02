

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 items-center'>
    <div className="logo cursor-pointer ">
    <span className='font-bold mx-14 text-2xl text-pink-400  hover:font-extrabold'>ITask</span>
    </div> 
        <ul className='flex justify-between list-none gap-12 mx-10 my-2 text-white cursor-pointer italic antialiased font-bold '>
            <li className=' hover:text-black'>Home</li>
            <li className=' hover:text-black'>Tasks</li>
            <li className=' hover:text-black'>Reamining</li>
        </ul>
    </nav>
  )
}

export default Navbar
