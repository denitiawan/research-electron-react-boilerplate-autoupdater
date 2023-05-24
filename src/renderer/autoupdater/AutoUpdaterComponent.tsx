import { AutoUpdaterService } from './AutoUpdaterService';

export default function AutoUpdaterComponent() {
  function doUpdate() {    
    AutoUpdaterService.doUpdateApp();
  }
  
  return (
    <div>
      <br />                 
      <button type="button" onClick={() => doUpdate()}>
        Quit And Install New Version
      </button>
      <br />   
          
    </div>
  );
}
