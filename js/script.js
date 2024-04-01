function updateClocks() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('timeDenmark').innerText = new Intl.DateTimeFormat('en-DK', {...options, timeZone: 'Europe/Copenhagen'}).format(new Date());
    document.getElementById('timeAustralia').innerText = new Intl.DateTimeFormat('en-AU', {...options, timeZone: 'Australia/Sydney'}).format(new Date());
    document.getElementById('timeChile').innerText = new Intl.DateTimeFormat('en-CL', {...options, timeZone: 'America/Santiago'}).format(new Date());
}

// Update clocks every second
setInterval(updateClocks, 1000);
