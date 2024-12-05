// // Header.js
import React from 'react';
import './pages.css';
const Header = () => {
    return (
        <div className='nav_head'>
          
                <div>
                    <img src='' alt='img'></img>
                </div>
                <div>
                    <input type='search'></input>
                    </div>
                <div>
                    <ul className='head_ul'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contect Us</li>
                    <li>login</li>
                </ul>
                </div>
              
           
        </div>
    );
};

export default Header;
// import React, { useState, useEffect } from 'react';

// const titles = ["Home", "About", "Services", "Portfolio", "Contact", "Blog", "Gallery", "FAQ", "Testimonials", "Team"];

// function Header() {
//   const [visibleTitles, setVisibleTitles] = useState(titles.slice(0, 6)); // Default visible titles

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 140) {
//         setVisibleTitles(titles);
//       } else if (window.innerWidth >= 100) {
//         setVisibleTitles(titles.slice(0, 6));
//       } else {
//         setVisibleTitles(titles.slice(0, 4));
//       }
//     };

//     handleResize(); // Call the function initially to set the initial visible titles

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Visible Titles</h1>
//       <ul>
//         {visibleTitles.map((title, index) => (
//           <li key={index}>{title}</li>
//         ))}
//       </ul>
//       {/* Render dropdown if there are more titles */}
//       {visibleTitles.length < titles.length && (
//         <select>
//           {titles.slice(visibleTitles.length).map((title, index) => (
//             <option key={index}>{title}</option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// }

// export default Header;
