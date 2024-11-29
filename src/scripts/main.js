AOS.init();

const dataDoEvento = new Date("Dec 25, 2025 18:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const countdown = setInterval(function() {
    const now = new Date();
    const timeStampAtual = now.getTime();

    const timeToTheEvent = timestampDoEvento - timeStampAtual;

    const diasEmMs= 1000 * 60 * 60 * 24;
    const horasEmMs= 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


    const daysToTheEvent = Math.floor(timeToTheEvent / diasEmMs);
    const hoursToTheEvent = Math.floor((timeToTheEvent % diasEmMs) / horasEmMs);
    const minutesToTheEvent = Math.floor((timeToTheEvent % horasEmMs) / minutosEmMs);
    const secondsToTheEvent = Math.floor((timeToTheEvent % minutosEmMs) / 1000);


    document.getElementById('countdown').innerHTML =  `${daysToTheEvent}D ${hoursToTheEvent}H ${minutesToTheEvent}M ${secondsToTheEvent}S`;

    if (timeToTheEvent < 0){
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Evento expirado.';
    }

}, 1000);

