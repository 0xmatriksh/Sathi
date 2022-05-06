import sathi from '../../static/img/sathi.png'

function Navbar(){
    return (
    <div>
      <nav className=''>
        <div className='h-20 flex justify-between pt-2 px-10 bg-slate-100'>
          <div>
            <img className='h-20 w-50' src={sathi} />
          </div>
          

          <div className='w-4/6 '>
            <ul className='flex justify-center space-x-10 w-500 pt-5 text-xl '>
              <li><a href=''>Home</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Login</a></li>
              <li><a href=''>Register</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default Navbar