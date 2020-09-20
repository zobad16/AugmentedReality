function GenerateQR()
{
   let link = "https://romantic-euclid-c8f58b.netlify.app/ar.html";
   let qrContainer = new QRCode(document.getElementById("qr-container"),{
      logo: "./asset/logo.png",
      logoWidth: undefined,
      logoHeight: undefined,
      width: 128,
	   height: 128,
      logoBackgroundColor: '#ffffff',
      logoBackgroundTransparent: false

   }) ;
   qrContainer.makeCode(link);
}
GenerateQR();