AOS.init();
const dataDoEvento = new Date("Dec 25, 2025 18:00:00");
const timestampDoEvento = dataDoEvento.getTime();
const countdown = setInterval(function() {
    const now = new Date();
    const timeStampAtual = now.getTime();
    const timeToTheEvent = timestampDoEvento - timeStampAtual;
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const daysToTheEvent = Math.floor(timeToTheEvent / diasEmMs);
    const hoursToTheEvent = Math.floor(timeToTheEvent % diasEmMs / horasEmMs);
    const minutesToTheEvent = Math.floor(timeToTheEvent % horasEmMs / minutosEmMs);
    const secondsToTheEvent = Math.floor(timeToTheEvent % minutosEmMs / 1000);
    document.getElementById('countdown').innerHTML = `${daysToTheEvent}D ${hoursToTheEvent}H ${minutesToTheEvent}M ${secondsToTheEvent}S`;
    if (timeToTheEvent < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Evento expirado.';
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
