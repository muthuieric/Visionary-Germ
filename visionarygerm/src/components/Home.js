import React from 'react';
import carImage from '../images/homepagepic.jpg';

const Home = () => {
  return (
    <>
      {/* Image Content */}
      <div className="w-full h-screen">
        <img className="w-full h-full object-cover fixed inset-0" src={carImage} alt="Car" />
      </div>
      
      {/* Hero Content */}
      <div className="fixed bottom-0 left-0 w-full px-8 py-6 bg-purple-500 bg-opacity-50">
        <h1 className="text-4xl text-white font-bold m-2">Discover Artistic Marvels</h1>
        <p className="text-white text-lg mb-2">
        "Art is the lie that enables us to realize the truth." - Pablo Picasso
        </p>
       
      </div>
    </>
  );
};

export default Home;



 {/* <button className="bg-white text-purple-500 px-6 py-3 rounded-lg text-lg font-semibold">
          Explore Art
        </button> */}