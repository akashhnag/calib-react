import React from 'react';
import NavbarComponent from './components/navbar/NavbarComponent';
import WorkArea from './components/body/WorkArea';
import ControlPanel from './components/body/ControlPanel';


function App() {
  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col'>
        <NavbarComponent></NavbarComponent>
        </div>
      </div>

      <div className='row'>
        <div className='col-8'>
        <WorkArea></WorkArea>
        </div>
        <div className='col-4'>
        <ControlPanel></ControlPanel>
        </div>
      </div>

     
    </div>
  );
}

export default App;
