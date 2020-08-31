let data = {
    HargaPM: 1500000,
    PPN: 15/100,
    Panjang: 20.5,
    Lebar: 30
};

function Total() {
    const luas = data.Panjang * data.Lebar;
    const total_harga = (luas * data.HargaPM) * data.PPN;
    return (
        // Format Number
        new Intl.NumberFormat('de-DE', { 
            style: 'currency', currency: 'IDR' 
        }).format(total_harga)
    );
}

console.log("Total harga : " + Total());