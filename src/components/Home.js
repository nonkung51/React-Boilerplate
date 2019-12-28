import React, { useState, useEffect } from 'react';

export default props => {
	const [count, setCount] = useState(0);
	const addCount = () => setCount(count + 1);
    const substractCount = () => setCount(count - 1);

    useEffect(() => {
        console.log("page didmount!")
    }, []);

    useEffect(() => {
        console.log("page did rerender!")
    });

    useEffect(() => {
        console.log("count did update!")
    }, [count]);

	return (
		<React.Fragment>
			<div>count: {count}</div>
            <button onClick={addCount}>add</button>
            <button onClick={substractCount}>substract</button>
		</React.Fragment>
	);
};
