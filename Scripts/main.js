function GenerateQR()
{
   let link = "https://romantic-euclid-c8f58b.netlify.app/ar.html";
   let qrContainer = new QRCode(document.getElementById("qr-container")) ;
   qrContainer.makeCode(link);
}
GenerateQR();