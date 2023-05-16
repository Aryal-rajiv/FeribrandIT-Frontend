import React from 'react';
export default function About(){
      return( <>
     <div className="wrapper1">
    
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
      <p className='into-data'>People are unaware about the choices they want and the style they want to carry 
for themselves.Most of the people belong to a middle class family so they don’t have enough 
money to buy new luxurious or classic clothes for different special occasions. In fact rich 
people also tend to be very less buyers in terms of formal clothes because they don’t want to 
waste money on clothes. They don’t want to wear the same clothes on different occasions so 
it may be an opportunity for those to sell the used clothes using this website.</p>
      <div>

      <h3 className='quote'>Discover our collection of redesigned clothes by top designers at affordable prices.
         Our mission is to bring you high-quality fashion pieces that combine the creativity of renowned designers with accessible prices</h3>
        <br />
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a clothing store committed to providing high-quality sustainable fashion for every occasion.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: feribrandit@gmail.com</p>
          <p>Phone: +977 9860620334</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FeribrandIT Store. All rights reserved.</p>
      </div>
    </footer>
        
    </div>
      </>
    )
  };
  