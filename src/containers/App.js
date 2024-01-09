import Homepage from './Homepage'
import Pets from './Pets';
import PetsDetails from './PetDetails';
import MountDetails from './MountDetails'
import Mounts from './Mounts';
import About from './About';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(0);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://oauth.battle.net/token', {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa('5f0c436b930642a9a8a56a1fe265863b:jATTCpGEUWj09QLDZWnMnTF6OuQxVdkW'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'grant_type': 'client_credentials'
          })
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Token Data:', data); // Logging the retrieved data
          setAccessToken(data.access_token);
          setExpiresIn(data.expires_in);
  
          // Schedule token refresh before expiration (e.g., 24 hours minus a buffer)
          setTimeout(fetchToken, (data.expires_in - 3600) * 1000); // Refresh token 1 hour before expiration
        } else {
          // Handle error cases
          console.error('Failed to fetch access token');
        }
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
  
    fetchToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pets/' element={<Pets accessToken={accessToken}/>} />
          <Route path='/petsDetails/:id' element={<PetsDetails accessToken={accessToken}/>} />
          <Route path='/mounts/' element={<Mounts accessToken={accessToken} />} />
          <Route path='/mountDetails/:id' element={<MountDetails accessToken={accessToken} />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
