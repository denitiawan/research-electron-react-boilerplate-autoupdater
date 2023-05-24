import { AutoUpdaterService } from './AutoUpdaterService';

export default function AutoUpdaterComponent() {
  function doUpdate() {    
    AutoUpdaterService.doUpdateApp();
  }
  
  return (
    <div>
      <br />                 
      <button type="button" onClick={() => doUpdate()}>
        Update App
      </button>
      <br />   
          
    </div>
  );
}
