import React, { useState, useEffect } from 'react';

export default props => {
	const [count, setCount] = useState(0);
	const addCount = () => setCount(count + 1);
    const substractCount = () => setCount(count - 1);

    useEffect(() => {
        alert("page didmount!")
    }, []);

    useEffect(() => {
        alert("page did rerender!")
    });

    useEffect(() => {
        alert("count did update!")
    }, [count]);

	return (
		<React.Fragment>
			<div>count: {count}</div>
            <button onClick={addCount}>add</button>
            <button onClick={substractCount}>substract</button>
		</React.Fragment>
	);
};
