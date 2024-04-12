import { useState, useEffect} from "react";
import SecondCounter from "./SecondCounter";
//create your first component
function App() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000);
		console.log(counter);

		return () => clearInterval(interval)
	}, [counter])


	function calculateSeconds(aCounter, placeValue) {
		return Math.floor(aCounter / placeValue)
	}


	return (

		<>
			<SecondCounter
				thoudsandDigit={calculateSeconds(counter, 1000)}
				hundredDigit={calculateSeconds(counter, 100)}
				tenDigit={calculateSeconds(counter, 10)}
				oneDigit={calculateSeconds(counter, 1)}
			/>
		</>
	)
}




export default App;
