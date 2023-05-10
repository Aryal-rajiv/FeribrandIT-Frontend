import React from 'react';

const personalities = [
  {
    name: 'Anu Shrestha',
    photo: './assets/Anu-Shrestha.jpg',
    info: 'Anu Shrestha is a well-known name in the Nepali fashion business. After benefiting regarding two decades in the market at other fashion houses, she came up with her own label ‘Kallisto Layouts’ in 2016.',
  },
  {
    name: 'Manish Rai',
    photo: './assets/Manish-Rai.jpg',
    info: 'Another most renowned stylist in Nepal is Manish Rai. Rai holds a bachelor’s degree in fashion designing from Namuna College of Style Modern Technology as well as possesses his very own fashion studio ‘Manish Rai’ at Chhaya Centre, Thamel.',
  },
  {
    name: 'Mishu Shrestha',
    photo: './assets/mishu-shrestha.jpg',
    info: 'Mishu Shrestha is one of the most in-demand Fashion Designers in Nepal who has gotten to several worldwide platforms.she has designed outfits for lots of celebs including Hollywood starlet Katianna Ley.',
  },
  {
    name: 'Mukta Shrestha',
    photo: './assets/mukta-shrestha-.jpg',
    info: 'Mukta Shrestha is a popular figure in the Nepali apparel industry. She has been a part of this industry for greater than two decades.Shrestha used Dhaka materials that are hand-woven by the neighborhood weavers of Nepal in her layouts.',
  },
  {
    name: 'Sanyukta Shrestha',
    photo: './assets/sanyukta-shrestha.jpg',
    info: 'Sanyukta Shrestha is another Nepali-born stylist commemorated worldwide. Her designs are constructed out of green fibers such as hemp, banana, milk, organic silk and also wild nettle as well as are handcrafted as well as ageless.',
  },
  {
    name: 'Shiwangi Shrestha',
    photo: './assets/shiwangi-Pradhan.jpg',
    info: 'Shiwangi Pradhan is just one of the most prominent Fashion Designers in Nepal. Her designs have enhanced different national and international fashion paths as well as red carpets consisting of the ‘Cannes Film Festival’ in 2019 and ‘World Style Parade’ in 2016.',
  },
  
  // Add more personalities here
];

const Rebrand = () => {
  return (

      <div>
        <br />
            <h1 className="display-6 fw-bolder text-center">Our Designers</h1>

        <br />


    <div className="grid-container">
      {personalities.map((personality, index) => (
        <div className="personality-card" key={index}>
          <img src={personality.photo} alt={personality.name} />
          <h3>{personality.name}</h3>
          <p>{personality.info}</p>
        </div>
      ))}
    </div>
    <br /> <br />
    <h3 className='quote'>Please visit our physical store to rebrand or sell used clothes.</h3>
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
    
    
  );
};

export default Rebrand;