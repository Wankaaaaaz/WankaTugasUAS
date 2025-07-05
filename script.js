function hitungDiskon() {
  const harga = parseFloat(document.getElementById('harga').value);
  const diskon = parseFloat(document.getElementById('diskon').value);
  if (!harga || !diskon) {
    document.getElementById('hasilDiskon').innerText = 'Mohon isi semua kolom.';
    return;
  }
  const hargaSetelahDiskon = harga - (harga * diskon / 100);
  document.getElementById('hasilDiskon').innerText = 'Harga setelah diskon: Rp ' + hargaSetelahDiskon.toLocaleString('id-ID');
}

function tampilkanPesan() {
  document.getElementById('pesanTerimaKasih').innerText =
    'Terima kasih sudah mendaftar! Info Pembayaran akan kami kirimkan ke alamat Email kamu.\nSalam Otot :)';
}
