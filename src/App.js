import './App.css';
import Login from './components/login';
import neoImg from './neo_gpt_bg.svg';
import flogo from './logo_without_bg.svg';

function App() {
  return (
    <div className = "flex max-w-screen max-h-screen">
    <section className = "flex flex-col md:w-4/7 lg:w-2/3 hidden sm:block mr-[10%]">
      <div className = "relative left-[5%] top-[5%] flex justify-between" >
        <div className = "flex">
          <img src = {flogo} className = "h-10 w-10"/>
          <h1 className = "text-2xl text-white font-bold mx-2">OnFinance</h1>
        </div>
        <div className = "rounded-full bg-custom-dark-gray px-1 py-2 ml-100">
          <h1 className = "text-sm font-bold text-custom-light-gray">Gen AI Assistant</h1>
        </div>
      </div>
      <div className = "absolute bottom-[5%] left-[10%] rounded-xl bg-custom-neon-green px-[2%] py-[2%] justify-center">
          <h1 className = "text-xl font-bold text-black">#1 Financial Services Copilot</h1>
      </div>
      <img src = {neoImg} className = "w-full h-full obejct-cover justify-center"/>
    </section>
    <section className = "w-full flex items-center justify-center sm:w-full md:w-3/7 lg:w-1/3 ">
      <Login />
    </section>
  </div>
  );
}

export default App;


    /*<div className = "flex max-w-screen max-h-screen">
      <section className = "flex flex-col md:w-4/7 lg:w-2/3 hidden sm:block ">
        <section className = "relative inset-x-[5%] top-[5%] flex justify-between mr-[25%] " >
          <div className = "flex">
            <img src = {flogo} className = "h-10 w-10"/>
            <h1 className = "text-2xl text-white font-bold mx-2">OnFinance</h1>
          </div>
          <div className = "rounded-full bg-custom-dark-gray px-1 py-2 ">
            <h1 className = "text-sm font-bold text-custom-light-gray">Gen AI Assistant</h1>
          </div>
        </section>
        <section className = "absolute left-[10%] bottom-[10%] right-[50%] ">
          <div className = "rounded-xl bg-custom-neon-green px-12 py-5 justify-items-center">
            <h1 className = "text-xl font-bold text-black">#1 Financial Services Copilot</h1>
          </div>
        </section>
        <img src = {neoImg} className = "w-full h-full justify-center"/>
      </section>
      <section className = "mt-[2%] h-full flex justify-center sm:w-full md:w-3/7 lg:w-1/3">
        <Login />
      </section>
    </div>

    <div className = "flex max-w-screen max-h-screen">
      <section className = "flex flex-col md:w-4/7 lg:w-2/3 hidden sm:block mr-[10%]">
        <div className = "relative left-[5%] top-[5%] flex justify-between" >
          <div className = "flex">
            <img src = {flogo} className = "h-10 w-10"/>
            <h1 className = "text-2xl text-white font-bold mx-2">OnFinance</h1>
          </div>
          <div className = "rounded-full bg-custom-dark-gray px-1 py-2 ml-100">
            <h1 className = "text-sm font-bold text-custom-light-gray">Gen AI Assistant</h1>
          </div>
        </div>
        <div className = "absolute bottom-[5%] left-[10%] rounded-xl bg-custom-neon-green px-[2%] py-[2%] justify-center">
            <h1 className = "text-xl font-bold text-black">#1 Financial Services Copilot</h1>
        </div>
        <img src = {neoImg} className = "w-full h-full obejct-cover justify-center"/>
      </section>
      <section className = "w-full flex items-center justify-center sm:w-full md:w-3/7 lg:w-1/3">
        <Login />
      </section>
    </div>
    */