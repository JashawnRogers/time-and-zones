const timezone = document.getElementById('timezone');
const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('tzModal');
const modal = document.getElementById('modal-1');
const modalCloseBtn = document.getElementById('closeBtn');
const timezoneList = document.getElementById('tzList');

MicroModal.init();

date.innerText = `${dayjs().format('dddd, MMMM D')}`;


let intervalID;

(function startIntervalOnLoad() {
    intervalID = setInterval(() => time.innerText = `${dayjs().format("h:mm:ss A")}`, 1000);
    timezone.innerText = `${dayjs.tz.guess()}`;
})()

function startTimezoneInterval(userTimezone) {
    intervalID = setInterval(() => time.innerText = `${dayjs().tz(userTimezone).format("h:mm:ss A")}`, 1000);
    timezone.innerText = `${timezoneList.options[timezoneList.selectedIndex].text}`;
}

function checkIfIntervalIsRunning(id) {
    if (id) {
        console.log('interval running: ', id);
    } else {
        console.log('No interval is running');
    }
}

function stopInterval(id) {
    clearInterval(id);
    id = null;
}


btn.addEventListener('click', () => {
    if (modal.classList === 'modal') {
        MicroModal.close('modal-1');
    } else {
        MicroModal.show('modal-1');
    }
})

modalCloseBtn.addEventListener('click', () => {
   const userTimezone = timezoneList.value;
   checkIfIntervalIsRunning(intervalID);
   stopInterval(intervalID);
   startTimezoneInterval(userTimezone);
})