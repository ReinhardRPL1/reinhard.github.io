let selamatdatang = alert("Selamat datang di Bank Central Asia. Silahkan klik ok untuk menuju ke menu selanjutnnya")
let pin = prompt("Silahkan buat PIN berupa angka")

while (isNaN(pin)) {
    alert("Pin yang di masukkan harus berupa angka!")
    pin = prompt('Silahkan buat PIN berupa angka');
}

let pinconfirm = confirm("Pin yang dibuat berhasil. Lanjut untuk ke menu login ?")

if (pinconfirm) {
    let pinmasuk = prompt("Silahkan masukkan pin untuk konfirmasi")

    while (pinmasuk !== pin) {
        alert("Pin yang di masukkan salah! Silahkan coba lagi")
        pinmasuk = prompt('Silahkan masukkan pin untuk konfirmasi');
    }

    let menu;
    
    
    do {
        menu = prompt("Selamat datang di layanan Bank Central Asia. Silahkan pilih menu yang akan di tuju. 1. Isi Saldo 2. Tarik Uang 3. Exit")
        
         if (menu == 1) {
            let isisaldo = parseInt(prompt("Silahkan masukkan jumlah saldo yang ingin anda isi (minimal Rp.50.000,00)") );
            while (isisaldo < 50000) {
                alert("Jumlah uang yang di isi harus minimal Rp. 50.000,00")
                isisaldo = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda isi (minimal Rp.50.000,00)") );
            }
            isisaldo;
            alert("Success");
        } else if (menu == 2) {
            let tarikuang = parseInt(prompt("Silahkan masukkan jumlah uang yang ingin anda tarik (minimal Rp. 1.000.000,00)") );
            while (tarikuang > 1000000) {
                alert("Jumlah uang yang di tarik maksimal adalah Rp. 1.000.000,00")
                tarikuang = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda tarik (maksimal Rp. 1.000.000,00)") );
            }
            tarikuang;
            alert("Success" );
        }
 else {
            alert("Menu yang dipilih tidak valid");
        }
    } while (menu != 3);
} else {
    alert("Error")
}











