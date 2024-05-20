window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const authority = urlParams.get('Authority');
    const status = urlParams.get('Status').toLowerCase();
    const element = document.getElementById('statusMessage');
    if (status === 'ok') {
        element.innerHTML = 'پرداخت با موفقیت انجام شد.';
        element.classList.add('success');
    } else {
        element.innerHTML = 'پرداخت با خطا مواجه شد.';
        element.classList.add('error');
    }

    let bot_link = this.document.getElementById('bot-link');
    bot_link.href = 'https://t.me/arzeshmand_bot?start=pay_' + authority;
});