const date = new Date();

const options = {
    era: "long",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long",
};

const dateinGermany = date.toLocaleString("de-DE", options);
console.log(dateinGermany);

const dateinItaly = date.toLocaleString("it-IT", options);
console.log(dateinItaly)