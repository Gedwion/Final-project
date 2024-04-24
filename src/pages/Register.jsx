import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform your form submission logic here
  };
  return (
    <div className="w-full h-full px-8 pt-24 pb-12 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className=" flex-col justify-start items-center gap-8 ">
        <div className="self-stretch  flex-col justify-start items-center gap-6 flex ">
          <div className="self-stretch flex-col justify-start items-start gap-3 flex font-primary">
            <div className="self-stretch text-center text-gray-900 text-3xl font-semibold">
              Sign up
            </div>
           
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="self-stretch  rounded-xl flex-col justify-start items-center gap-6 flex mt-5">
            <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch  flex-col justify-start items-start flex">
                <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Name
                    </div>
                    <div className=" w-full self-stretch px-3.5 py-1 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <input
                          type="text" 
                          {...register("name", {
                            required: true,
                            message: "Enter your name",
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          placeholder="Enter your name"
                          className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Email
                    </div>
                    <div className=" w-full self-stretch px-3.5 py-1 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <input
                          type="email"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                        />
                        {errors.email && (
                          <p role="alert">{errors.email?.message}</p>
                        )}
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
                    <div className=" w-full self-stretch px-3.5 py-1 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <input
                          type="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            message:
                              "password must be greater than 8 charachters",
                          })}
                          aria-invalid={errors.password ? "true" : "false"}
                          placeholder="Create a password"
                          className="w-full px-3 py-2 bg-transparent border-none focus:outline-none"
                        />
                        {errors.password && (
                          <p role="alert">{errors.password?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          

      {/* Role Selection Dropdown */}
      <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
        <div className="text-slate-700 text-sm font-medium leading-tight">
          Role
        </div>
        <select
          {...register("role", {
            required: true,
          })}
          className="w-full self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300"
        >
          <option value="Client">Client</option>
          <option value="Retailer">Retailer</option>
        </select>
        {errors.role && (
          <p role="alert" className="text-red-500 text-sm">
            Role is required
          </p>
        )}
      </div>

            <div className="self-stretch justify-between items-center inline-flex gap-8">
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
              <button className="w-full bg-green-800 text-white rounded-lg py-2 focus:outline-none hover:bg-green-900 transition duration-300">
                Create account
              </button>
             
            </div>
          </div>
        </form>
        <div className="self-stretch justify-center items-start gap-1 inline-flex mt-3 w-full">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Already have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                <Link to="/Login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
