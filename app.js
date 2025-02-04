const timezone = document.getElementById('timezone');
const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('tzModal');
const modal = document.getElementById('modal-1');

MicroModal.init();

timezone.innerText = `${dayjs.tz.guess()}`;
time.innerText = `${dayjs().format("h:mm:ss A")}`;
date.innerText = `${dayjs().format('dddd, MMMM D')}`

btn.addEventListener('click', () => {
    if (modal.classList === 'modal') {
        MicroModal.close('modal-1');
    } else {
        MicroModal.show('modal-1');
    }
})
