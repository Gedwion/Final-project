import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    //  submission logic here
  }

  return (
    <div className="w-full h-full px-8 pt-24 pb-12 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className="flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch flex-col justify-start items-center gap-8 flex">
          <div className="shadow justify-start items-start inline-flex">
            <div className="w-12 h-12 relative bg-gradient-to-b from-white to-gray-300 rounded-xl border border-gray-300">
              <img src="/books-min.jpg" alt="" />
              <div className="w-12 h-12 left-0 top-0 absolute" />
              <div className="w-6 h-6 left-[12px] top-[12px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow" />
              <div className="w-12 h-6 left-0 top-[24px] absolute bg-white bg-opacity-20 rounded-bl-xl rounded-br-xl backdrop-blur-[7.50px]" />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-center text-gray-900 text-3xl font-semibold leading-[38px]">
              Log in to your account
            </div>
            <div className="self-stretch text-center text-gray-500 text-base font-normal leading-normal">
              Welcome back! Please enter your details.
            </div>
          </div>
        </div>
        <form action="POST" onSubmit={submit} className="w-full">
          <div className="self-stretch rounded-xl flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Username
                    </div>
                    <div className="w-full self-stretch px-3.5 py-1 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter your username"
                          className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Password
                    </div>
                    <div className="self-stretch px-3.5 py-1 bg-white rounded-lg shadow border border-gray-300 justify-start items-center ">
                    <div className="grow shrink basis-0 h-full justify-start items-center gap-1 flex">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <input type="checkbox" name="" id="" />
                <div className="text-slate-700 text-sm font-medium leading-tight">
                  <div>Remember for 30 days</div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-violet-700 text-sm font-semibold leading-tight">
                    Forgot password
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex w-full">
              <button className="w-full bg-green-800 text-white rounded-lg py-2 focus:outline-none hover:bg-green-900 transition duration-300 bold">
                Sign in
              </button>
             
            </div>
          </div>
        </form>
        <div className="self-stretch justify-center items-start gap-1 inline-flex">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Don’t have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                <Link to={"/Signup"}>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
