import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.facebook.com/rakibulmrh')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : 'Loading...'}
    </div>
  );
}

export default App;