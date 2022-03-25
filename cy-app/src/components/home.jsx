import React from 'react';

const Home=()=>{
return(
<>
<div>
<div className='grid grid-cols-3 bg-black  text-white home'> 
  <div className="pl-8 pt-24  mt-8">
  <h1 className='font-bold text-3xl pl-10 pb-5'>Hi , I am  Pauline</h1>
  <p className='h-12 w-52  justify-between'>Welcome to the best Electricity online selling</p>
  </div>

  <div className="pt-5">
    <div className='mt-96 -mb-8 ml-14 '>
  <button className="text-3xl text-white bg-green h-14 w-64 -mt-23 rounded-3xl">GET Started</button>
  </div>
  </div>
  <div className="pt-5 mt-8">
  <img src="./watt.jpg" alt="pauline's meter" className='ml-20'/>
  </div>
 </div>

</div>


</>);
}

export default Home;

