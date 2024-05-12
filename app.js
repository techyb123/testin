let imgbox = document.getElementById('imgbox');
let Input = document.getElementById('Input');
let qrImage = document.getElementById('qrImage');
let add= document.getElementById('add');







function generateQR(){

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Input.value;

}

function downloadQR(){
    var img=document.querySelector("#qrImage");
    var link=document.createElement('a');
    link.download='QRCode.png';
    link.href=img.src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

  }

