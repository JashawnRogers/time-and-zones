const timezone = document.getElementById('timezone');
const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('tzModal');
const modal = document.getElementById('modal-1');
const modalCloseBtn = document.getElementById('closeBtn');
const timezoneList = document.getElementById('tzList');

MicroModal.init();

timezone.innerText = `${dayjs.tz.guess()}`;
date.innerText = `${dayjs().format('dddd, MMMM D')}`;

// Get interval ID so that is can be cleared when user chooses timezone
let intervalID = setInterval(() => time.innerText = `${dayjs().format("h:mm:ss A")}`, 1000);


btn.addEventListener('click', () => {
    if (modal.classList === 'modal') {
        MicroModal.close('modal-1');
    } else {
        MicroModal.show('modal-1');
    }
})

modalCloseBtn.addEventListener('click', () => {
    clearInterval(intervalID);
   const userTimezone = timezoneList.value;
   timezone.innerText = `${timezoneList.options[timezoneList.selectedIndex].text}`;
   setInterval(() => time.innerText = `${dayjs().tz(userTimezone).format("h:mm:ss A")}`, 1000);
})