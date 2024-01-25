import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container-fluid p-0'>
      {/* text */}
      <h1 className='text-white text-center mt-5'>Step into The Shire's #1 bistro - the coziest Hobbit haven in Middle-Earth.</h1>
      <br/><br/>
      <h1 className='text-white text-center mt-5'>Join us for a culinary journey of joy and simplicity. Your taste buds are in for an unexpected adventure!</h1>
      
      <div className='background'>
        <div className='jumbotron jumbotron-fluid text-center'>
          <div className='container'>
            {/* Content for the jumbotron if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
