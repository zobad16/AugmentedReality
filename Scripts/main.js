function GenerateQR()
{
   let link = "https://romantic-euclid-c8f58b.netlify.app/ar.html";
   let qrContainer = new QRCode(document.getElementById("qr-container"),{
      logo: "./asset/barcode.png",
      logoWidth: 128,
      logoHeight: 128,
      width: 128,
	   height: 128,
      logoBackgroundColor: '#ffffff',
      logoBackgroundTransparent: false

   }) ;
   qrContainer.makeCode(link);
}
//GenerateQR();