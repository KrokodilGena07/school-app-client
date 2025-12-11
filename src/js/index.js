const news = document.getElementById('news');
console.log(news);

fetch('https://school-app-server-w1rb.onrender.com/api/posts')
    .then(data => data.json())
    .then(data => {
        let html = '';
        data.forEach(i => {
            html += `<div><h2>${i.title}</h2><p>${i.body}</p></div>`
        })
        news.innerHTML = data;
    })
    .catch(err => {
        news.innerHTML = '<div class="news-text">Нет событий</div>'
    })
