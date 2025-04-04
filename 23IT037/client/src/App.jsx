import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
    const [data, setData] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [qrCodes, setQrCodes] = useState([]);

    const generateQRCode = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/qr/generate', { data });
            setQrCode(response.data.qrCodeData);
            fetchQrCodes(); 
        } catch (error) {
            console.error('Error generating QR Code:', error);
        }
    };

    const fetchQrCodes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/qr');
            setQrCodes(response.data); 
        } catch (error) {
            console.error('Error fetching QR Codes:', error);
        }
    };

    useEffect(() => {
        fetchQrCodes(); 
    }, []);

    return (
        <div className="App">
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter data for QR Code"
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCode && (
                <div>
                    <h2>Generated QR Code:</h2>
                    <img src={qrCode} alt="Generated QR Code" />
                </div>
            )}
            <h2>Previously Generated QR Codes:</h2>
            <ul>
                {qrCodes.map((qr, index) => (
                    <li key={index}>
                        <p>{qr.data}</p>
                        <img src={`data:image/png;base64,${qr.qrCodeData}`} alt={`QR Code ${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;