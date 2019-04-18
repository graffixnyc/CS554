import React from 'react';

/**
 * Our Button component mutates the parent's state based on the props
 * @param {String} type the type of mutation
 * @param {Number} currentCount the current count held by our parent state
 * @param {Function} setCount a function used to alter our parent state
 * @param {React.Component} children the child elements within our button
 */
const Button = ({ type, currentCount, setCount, children }) => (
   <button
      onClick={() => {
         switch (type) {
            case 'INC':
               setCount(++currentCount);
               break;
            case 'DEC':
               setCount(--currentCount);
               break;
            default:
               setCount(currentCount);
         }
      }}
   >
      {children}
   </button>
);

export default Button;
