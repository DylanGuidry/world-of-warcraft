import Homepage from './Homepage'
import Pets from './Pets';
import PetsDetails from './PetDetails';
import MountDetails from './MountDetails'
import Mounts from './Mounts';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pets/' element={<Pets />} />
          <Route path='/petsDetails/:id' element={<PetsDetails />} />
          <Route path='/mounts/' element={<Mounts />} />
          <Route path='/mountDetails/:id' element={<MountDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
