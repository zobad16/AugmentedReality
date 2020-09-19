function GenerateQR()
{
    var link = "192.168.56.1:5500/ar.html";
    var qrContainer = new QRCode(document.getElementById("qr-container")) ;
    qrContainer.makeCode(link);
}
GenerateQR();