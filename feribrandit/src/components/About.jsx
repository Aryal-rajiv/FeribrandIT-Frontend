import React from 'react';
export default function About(){
  
    return( <>
     <div className="wrapper">
    
      <div className='gird grid-two-column'>
       <div className='hero-section-data'>
        <h3 className='into-data'>Welcome to </h3>
        <h1 className='into-data'>FeribrandIT</h1>
         <p className='into-data'>  
          FeribrandIT is a basic web based application which mainly focuses on the rebranding of the 
          used clothes through our renowned fashion designers, providing them a fresh and unique look 
         and selling them at a very reasonable and affordable price. Since we cannot afford new dresses 
          for every occasion so that FeribrandIT maybe the best choice for everyone of us. The main aim 
          of this website is to provide high-quality, stylish clothing at an affordable price. Along with 
          the idea of rebranding gently used clothes our goal also focuses on the sustainable and 
          environment friendly fashion business. We offer a wide selection of clothing for men, women, 
          and children, and we are constantly updating our inventory with new items. Getting the same 
          sort of dresses as of the famously designed and branded clothes at such rates would be the most 
          fascinating thing one can ever have. This application hence is mostly enfolded to provide cost 
          effective service to the customers.
         </p>
         
         
  
       </div>
       {/*Homepage wala image */}
       <div className='hero-section-image'>
        <figure>
        <img src='./assets/sub-banner1.jpg' alt='hero section ko pic' className='image-style'/>
        </figure>
       </div>
      </div>
      </div>
      <div>
      <h3 className='quote'>Discover our collection of redesigned clothes by top designers at affordable prices.
         Our mission is to bring you high-quality fashion pieces that combine the creativity of renowned designers with accessible prices</h3>
          
    </div>
      </>
    )
  };
  