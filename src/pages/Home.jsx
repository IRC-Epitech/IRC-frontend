import SlideBar from "../components/SlideBar.jsx";
import MessageBox from "../components/MessageBox.jsx";

function Home() {
  return (
    <>
      <div class="shadow-lg rounded-lg flex flex-col min-h-screen">
        <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div class="font-semibold text-2xl">GoingChat</div>
          <div class="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>

        <div class="flex flex-row justify-between bg-white h-screen">
          {/* <!-- chat list --> */}
          <SlideBar />
            {/* <!-- end chat list --> */}
            {/* <!-- message --> */}
          <MessageBox />
          {/* <!-- end message --> */}
          <div class="w-/5 border-l-2 px-5 min-h-screen ">
            <div class="flex flex-col ">
              <div class="font-semibold text-xl py-4">Mern Stack Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                class="object-cover rounded-xl h-64"
                alt=""
              />
              <div class="font-semibold py-4">Created 22 Sep 2021</div>
              <div class="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
