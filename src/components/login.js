import * as React from 'react';
import flogo from '../logo_without_bg.svg';

const Login = () =>  {
    return(
        <div className = "bg-white px-10 py-10 rounded-3xl border-2 border-black">
            <div className = "visible md:invisible lg:invisible xl:invisible">
                <img src = {flogo} className = "h-10 w-10"/>
            </div>
            <h1 className = "text-2xl font-bold">Log in to your account</h1>
            <p className = "text-base font-normal text-custom-aquamarine">Welcome back! Please enter your details.</p>
            <div className = "mt-8">
                <div>
                    <label className = "text-base font-normal text-custom-aquamarine">Email</label>
                    <input
                        className = "w-full border-2 border-black rounded-xl p-2 bg-transparent"
                        placeholder = "Enter your work email"
                    />
                </div>
                <div>
                    <label className = "text-base font-normal text-custom-aquamarine">Password</label>
                    <input
                        className = "w-full border-2 border-black rounded-xl p-2 bg-transparent"
                        placeholder = "Enter your password"
                        type = "password"
                    />
                </div>
                <div className = "mt-8 flex flex-col">
                    <button className = "active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-custom-blue text-white text-lg font-bold">Sign In</button>
                </div>
                <div className = "mt-8 flex justify-center items-center">
                    <p className = "font-normal text-sm text-custom-gray">Don't have an account?</p>
                    <button className = "font-normal text-sm text-custom-light-blue">Contact OnFinance AI</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
