import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handleGeneraterQRCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneraterQRCode}
        >
          Generator
        </button>
        <div>
          <QRCode id="QR-code-value" value={qrCode} size={400} bg="#fff" />
        </div>
      </div>
    </div>
  );
}
