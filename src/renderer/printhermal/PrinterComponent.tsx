import { PrinterEscPosService } from './PrinterEscPosService';

export default function PrinterComponent() {
  function doTestPrinter80() {    
    PrinterEscPosService.doTestPrinter80();
  }
  function doTestPrinter58() {    
    PrinterEscPosService.doTestPrinter58();
  }

  return (
    <div>
  

      <button type="button" onClick={() => doTestPrinter80()}>
        Test Printer 80mm
      </button>
      <br />   
      <br />   
      <button type="button" onClick={() => doTestPrinter58()}>
        Test Printer 58mm
      </button>
      <br />      
    </div>
  );
}
