import React from 'react';
import avatar from '../../Images/me.jpg'

const Profile = () => {
    return (

        <div className="bg-orange-100 font-sans h-screen w-full flex flex-row justify-center items-center">
          <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
             <img className="w-32 mx-auto rounded-full -mt-20 border-2 border-white" src={avatar} alt=""/>
             <div className="text-center mt-2 text-3xl font-medium">Moniruzzaman Sujon</div>
             <div className="text-center mt-2 font-light text-sm">@dev.sujon</div>
             <div className="text-center font-normal text-lg">Bangladesh</div>
             <div className="px-6 text-center mt-2 font-light text-sm">
               <p>
                 Front end Developer || React.js || React Native
               </p>
             </div>
             <hr className="mt-8"/>
             <div className="flex p-4">
               <div className="w-1/2 text-center">
                 <span className="font-bold text-blue-700">03 </span> Rank
               </div>
               <div className="w-0 border border-gray-300">
                 
               </div>
               <div className="w-1/2 text-center">
                 <span className="font-bold text-green-700">96.94% </span> Accuracy
               </div>
             </div>
          </div>
        </div>
    );
};

export default Profile;