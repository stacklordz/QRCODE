import { useState } from "react";
import QRCode from "qrcode";

function App() {

  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(url, {
      inline-size: 500,
      margin: 3,  
      color: {
        dark: "#141414ff",
        light: "#f0e9e9ff"
      }
    }, (err, dataUrl) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(dataUrl);
      setQrCodeUrl(dataUrl);
    });
  }

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generateQrCode}>Generate</button>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
      {qrCodeUrl && <a href={qrCodeUrl} download="qrcode.png">Download</a>}


    </div >
  )
}
export default App;