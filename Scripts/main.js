function GenerateQR()
{
   var link = "https://romantic-euclid-c8f58b.netlify.app/ar.html";
    var qrContainer = new QRCode(document.getElementById("qr-container")) ;
    qrContainer.makeCode(link);
}
GenerateQR();