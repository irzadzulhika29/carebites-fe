import { useState } from 'react';
import LoginImage from '../assets/img/donate.jpg';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const RegisterScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            <Navbar />
            <section className=" min-h-screen flex items-center justify-center py-10">
                <div className="p-5 max-w-3xl shadow-lg bg-gray-100 flex rounded-2xl items-center">
                    <div className='md:w-1/2 px-16'>
                        <Link to="/homepage"> <h2 className='font-bold text-2xl text-[#00712D]'>Register</h2> </Link>

                        <p className='text-sm mt-4 text-[#00712D]'>If You Already A Member, Easily Log In</p>

                        <form className='flex flex-col gap-4' action="">
                            <input className='p-2 rounded-xl mt-8 border' type="text" name="username" placeholder='Username' />
                            <input className='p-2 rounded-xl border' type="email" name="email" placeholder='Email' />
                            <input className='p-2 rounded-xl border' type="text" name="phoneNumber" placeholder='Phone Number' />
                           
                            <div className='relative'>
                                <input
                                    className='p-2 rounded-xl border w-full'
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder='Password'
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="gray"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                                    viewBox="0 0 16 16"
                                    onClick={togglePasswordVisibility}
                                >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                            </div>

                            <div className='relative'>
                                <input
                                    className='p-2 rounded-xl border w-full'
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder='Conform Password'
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="gray"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                                    viewBox="0 0 16 16"
                                    onClick={togglePasswordVisibility}
                                >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                            </div>
                            <button className='bg-[#00712D] rounded-xl py-2 text-white hover:scale-105 duration-300'>Register</button>


                        </form>


                    </div>

                    <div className='md:block hidden w-1/2'>
                        <img className=' rounded-2xl' src={LoginImage} alt="Login Illustration" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RegisterScreen
