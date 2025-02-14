window.onload = function() {
    let index = 1;
    const array = ["Pentru iubita mea frumoasa, Alexandra 😍", 
                    "Aici ne-am cunoscut noi pentru prima oara 😁",
                    "Aici suntem noi la inceputul relatiei noastre (uite ce bine ne sta impreuna! 🥰)",
                    "Deja stiam ca mi-am gasit jumatatea 😌",
                    "(uneori imi place sa ma uit la tine cum dormi 😴)", 
                    "Iti multumesc ca mi-ai fost aproape chiar si in clipele dificile 🥹",
                    "Acum urmeaza o intrebare foarte importanta... 🤗"
                ];
    const colors = ["lightblue", "lightgreen", "yellow", "lightpink", "lightblue", "purple", "pink"];
    const body = document.body;
    const imagine = document.createElement('img');
    const btn = document.createElement('button');
    imagine.src =`images/poza${index}.jpeg`;
    const container = document.getElementsByClassName('container')[0];
    const descriere = document.createElement('div');
    descriere.style.fontFamily = "Sans-Serif";
    descriere.textContent = array[index-1];
    container.append(imagine);
    container.append(descriere);
    container.append(btn);
    imagine.style.maxHeight = "400px";
    imagine.style.maxWidth = "300px";
    imagine.style.height = "auto";
    imagine.style.width = "auto";
    btn.style.height = "45px";
    btn.style.width = "100px";
    btn.textContent = "NEXT";
    
    btn.addEventListener('click', function() {
        if (index==7){
            window.location.href = 'intrebare.html';
        }
        if (index < 7) {
            index++;
            descriere.textContent = array[index-1];
            body.style.backgroundColor = colors[index-1];
            if (index == 2){
                const video = document.createElement('video');
                video.src = `images/gif.mp4`;
                video.style.height = "310px";
                video.style.width = "255px";
                video.loop = true;
                video.autoplay = true;
                container.replaceChild(video, imagine);
            }
            else if (index == 3) {
                container.replaceChild(imagine, container.querySelector('video'));
                imagine.src = `images/poza${index}.jpeg`;
            }
            else{
                imagine.src = `images/poza${index}.jpeg`;
            }
            
        }
    });
}
