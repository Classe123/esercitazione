
let elTesto = document.getElementById('testo');

let elColore = document.getElementById('colore');

let elForma = document.getElementById('forma');

let elButton = document.querySelector('.btn.btn-success');

// console.log(elTesto, elColore, elForma, elButton);

let elBox = document.querySelector('.box');
//console.log(elBox);


elButton.addEventListener('click', function(){
    // console.log('hai cliccato il bottone');
    const testo = elTesto.value;   
    const colore = elColore.value;
    const forma = elForma.value;
    console.log(testo, colore, forma);
    const formaClass =  (forma === 'circle') ? 'rounded-circle' : '';
//   'rounded-circle'
    elBox.innerHTML = testo;
    // elBox.className = '';
    elBox.className = 'box '+ colore +' '+formaClass;
    // elBox.classList.add(colore);
    // elBox.classList.remove('d-none');
    
});