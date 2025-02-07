fetch('https://wellfinee.github.io/tz-news/components/header/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);
fetch('https://wellfinee.github.io/tz-news/components/footer/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
fetch('https://wellfinee.github.io/tz-news/components/modal/modal.html')
    .then(response => response.text())
    .then(data => document.getElementById('modal').innerHTML = data);
