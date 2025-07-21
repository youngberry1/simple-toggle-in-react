import { useState } from 'react';

export function ProfileCard({ username, age, country }) {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const [fontSize, setFontSize] = useState(16);

   // Inline dynamic card styles
   const cardStyles = {
      backgroundColor: isDarkMode ? '#222' : '#f9f9f9',
      color: isDarkMode ? 'white' : '#333',
      fontSize: `${fontSize}px`,
   };

   function themeToggle() {
      setIsDarkMode((prev) => !prev);
   }

   function increaseFont() {
      setFontSize((prev) => (prev < 26 ? prev + 2 : prev)); // Max 26px
   }

   function decreaseFont() {
      setFontSize((prev) => (prev > 10 ? prev - 2 : prev)); // Min 10px
   }

   function resetFont() {
      setFontSize(16);
   }

   return (
      <div className='card' style={cardStyles}>
         <h1>Name: {username}</h1>
         <p>Age: {age}</p>
         <p>Country: {country}</p>
         <div className='button-group'>
            <button onClick={increaseFont}>Increase Font</button>
            <button onClick={decreaseFont}>Decrease Font</button>
            <button onClick={resetFont}>Reset Font</button>
            <button onClick={themeToggle}>
               {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            </button>
         </div>
      </div>
   );
}

export default function App() {
   return <ProfileCard username='samuel011' age='25' country='Ghana' />;
}
