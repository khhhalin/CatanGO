// Import React and useState hook from React library
import React, { useState } from 'react';

// Define the Counter functional component
function Counter() {
    // Initialize state variable 'count' with a default value of 0
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Render the component
    return (
        <div>
            <h1>Count: {count}</h1> 
            <button onClick={increment}>Increment</button>
        </div>
    );
}

// Export the Counter component for use in other parts of the application
export default Counter;
