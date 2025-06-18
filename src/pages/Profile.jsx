import React from "react";
import image from "../image.png";

const Profile = () => {
  return (
    <div className="h-screen  flex flex-col items-center  ">
      <div className="h-full flex flex-col border border-2 w-screen md:w-96">
        <div className="py-4 px-4 bg-white text-xl border-b border-2">
          Account Settings
        </div>
        <div className="h-full p-4 bg-[#F7F8F9] ">
          <div className="h-20 w-full flex gap-3">
            <img src={image} alt="img" className="h-20 w-22" />
            <div>
              <h3 className="text-xl font-semibold">Marry Doe</h3>
              <p>marry@gmail.com</p>
            </div>
          </div>
          <p className="mt-3 mb-3 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quidem iure cum similique, debitis accusamus, a, veritatis tenetur
            atque quasi quas repellendus blanditiis dolore! Quasi, et. Corporis
            consequatur optio ea.
          </p>
          <hr class="border-t-2 border-dashed border-gray-300/80" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
