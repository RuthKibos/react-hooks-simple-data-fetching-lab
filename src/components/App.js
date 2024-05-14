// create your App component here
import { useState, useEffect } from 'react'

function App() {
    const[dogImgUrl, setDogImgUrl]=useState(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImgUrl(data.message);
        // Set loading status to false once data is fetched
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {/* Display loading message when data is being fetched */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // Display dog image once data is fetched
        <img src={dogImgUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

  export default App;
