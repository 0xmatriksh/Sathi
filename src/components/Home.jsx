import friend from '../../static/img/undraw.png'

function Home() {
  
    return (
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="px-6 py-10 w-3/6 lg:w-2/6  shadow-md rounded">
          <div className="flex flex-col">
            <div className='flex justify-center w-full mb-4'><img className=" h-24" src={friend}/>
            </div>
            <h1 className="flex justify-start text-xl font-bold lg:text-2xl mb-2">Login</h1>
          </div>
<hr />
          <div className="">
            <form className="">

              <div className="mt-4 flex flex-col lg:mt-6">
                <label className="flex justify-start text-sm lg:text-base font-bold mb-2 items-start" htmlFor="">Email</label>
                <input className="w-full h-10 py-2 px-3 shadow appearance-none  bg-white border border-solid border-gray-300 rounded-md text-grey-darker focus:border-green-100" type="email" name="" id="" placeholder="yourname@gmail.com"/>
              </div>

              <div className="mt-4 flex flex-col lg:mt-6">
                <label className="flex justify-start text-sm lg:text-base font-bold mb-2" htmlFor="">Password</label>
                <input className="w-full h-10 py-2 px-3 shadow appearance-none bg-white border border-solid border-gray-300 rounded-md focus:text-gray-700 focus:bg-white focus:outline-none" type="password" name="" id="" placeholder="************"/>
              </div>

              <div className='mt-4 flex flex-col lg:mt-6'>
                <div className="flex justify-between">
                  <div>
                    <input className="accent-red-500" type="checkbox" name="" id="" />
                    <label> Remember me</label>
                  </div>
                  <a class="flex justify-start align-baseline font-bold text-sm lg:text-base text-red-500 hover:text-blue-darker" href="#">
                  Forgot Password?
                  </a>
                </div>
                <button className="w-full mt-2 lg:mt-4 flex justify-center text-sm lg:text-base font-bold  py-2   bg-red-500 text-white rounded-xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit">Login</button>
                <div className="flex justify-start mt-3">
                  <div>
                    Not yet Registered? &nbsp;
                  </div>
                  
                  <a class="flex justify-start align-baseline font-bold text-sm lg:text-base text-red-500 hover:text-blue-darker" href="#">
                  Create an account?
                  </a>
                </div>
                
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }

export default Home