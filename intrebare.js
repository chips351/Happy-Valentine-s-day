window.onload = function() {
    let contor = 0;
    const yes = document.getElementsByClassName('yes')[0];
    const no = document.getElementsByClassName('no')[0];
    const container = document.getElementsByClassName('container')[0];
    const body = document.body;
    const descriere = document.getElementsByClassName('descriere')[0];
    yes.addEventListener('click', function() {
        body.style.backgroundImage = "url('images/background-hearts.png')";
        const dontLove = document.getElementById('dontLove');
        if (dontLove) {
            dontLove.style.display = 'none';
        }
        yes.style.display = 'none';
        no.style.display = 'none';
        descriere.textContent = "YEY!!! STIAM EU CA VREI!!! TE IUBESC FOARTE MULT BBY!!! <333"
    });

    no.addEventListener('mouseover', function(){
        const randomX = Math.floor(Math.random() * (window.innerWidth - no.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - no.offsetHeight));
        no.style.position = 'absolute';
        no.style.left = `${randomX}px`;
        no.style.top = `${randomY}px`;
        contor++;
        if (contor == 5){
            const dontLove = document.createElement('div');
            dontLove.id = 'dontLove';
            dontLove.textContent='CHIAR NU MA IUBESTI????? :(((('
            dontLove.style.color='red';
            dontLove.style.fontSize='35px';
            container.appendChild(dontLove);
        }
    })
}
