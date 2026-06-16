// template_qj6j7rm
// service_7o00ewx
// X6ftSh3m30nGOUdj-

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_7o00ewx',
        'template_qj6j7rm',
        event.target,
        'X6ftSh3m30nGOUdj-'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
}).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unavailable. Please contact me directly at dominicvenzor97@gmail.com"
    );
});
}