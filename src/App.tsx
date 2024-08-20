// import './App.css'

import reaction from "../src/assets/images/icon-reaction.svg";
import memory from "../src/assets/images/icon-memory.svg";
import verbal from "../src/assets/images/icon-verbal.svg";
import visual from "../src/assets/images/icon-visual.svg";


function App() {
  return (
    <>
      <div className="mt-28 flex bg-gray-300 w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl ">
        <div className=" w-full flex ">
          <div className="w-1/2 rounded-lg  bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-6 flex items-center justify-center flex-col  ">
            <div className="text-white font-semibold ">Your Result</div>

            <button className="bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[#5654c4e1] mt-4 h-24 w-24 rounded-full text-2xl font-extrabold text-white">
              76 <br />{" "}
              <span className="text-sm font-normal text-gray-300">of 100</span>
            </button>

            <h1 className="mt-4 text-white text-xl font-semibold">Great</h1>
            <p className=" text-sm text-gray-200 mb-2 ">
              You scored higher than 65% of the people who have taken these
              tests
            </p>
          </div>

          <div className="p-4 ">
            <p className="text-black font-semibold">Summary</p>

              <div className="mt-4 space-y-4 ">
              <div className="bg-rose-100 flex px-4 py-2 rounded-md  ">
                  <img src={reaction} alt="reaction" />
                  <p className="text-sm  font-semibold px-1 text-rose-600  ">
                    Reaction
                  </p>
                  <p className="text-sm">80/100</p>
                </div>

              <div className="bg-yellow-100 flex px-4 py-2 rounded-md  ">
                  <img src={memory} alt="reaction" />
                  <p className="text-sm  font-semibold px-1 text-yellow-600  ">
                  Memory
                  </p>
                  <p className="text-sm">80/100</p>
                </div>


              <div className="bg-teal-200 flex px-4 py-2 rounded-md  ">
                  <img src={verbal} alt="reaction" />
                  <p className="text-sm  font-semibold px-1 text-teal-600  ">
                  Verbal
                  </p>
                  <p className="text-sm">80/100</p>
                </div>


              <div className="bg-blue-300 flex px-4 py-2 rounded-md  ">
                  <img src={visual} alt="reaction" />
                  <p className="text-sm  font-semibold px-1 text-blue-600  ">
                  Visual
                  </p>
                  <p className="text-sm">80/100</p>
                </div>

                <div className="flex justify-center items-center">

                  <button className="bg-slate-950 mt-6 text-white px-12 py-1 rounded-full">Continue</button>
                    </div>

                  </div>

                    
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
