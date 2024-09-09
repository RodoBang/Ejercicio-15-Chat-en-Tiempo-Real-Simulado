

function enviarMSJ(){
    const msjText = document.getElementById("mensaje");
    alert(msjText.value);

    const chat = document.getElementById("chat");

    const usrMSJ = document.createElement("div");
    usrMSJ.innerText = msjText.value;
    usrMSJ.classList.add("msj","usr");

    chat.appendChild(usrMSJ);

    msjText.value = "";

    setTimeout(() => {
        const chtMSJ = document.createElement("div");
        chtMSJ.innerText = respueta();
        chtMSJ.classList.add("msj","cht");

        chat.appendChild(chtMSJ);
    }, 900);
}

function respueta(){
    const mensjaes = ["Hola","Buen Dia", "¿Qué necesitas?", "Me agradas"];

    const rnd = Math.floor(Math.random()*mensjaes.length);

    return mensjaes[rnd];
}