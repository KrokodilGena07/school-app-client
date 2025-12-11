const news = document.getElementById('news');
console.log(news);

fetch('http://localhost:5000/api/posts')
    .then(data => {
        let html = '';
        console.log(data.json())
        news.innerHTML = html;
    })
    .catch(err => {
        news.innerHTML = '<div class="news-text">Нет событий</div>'
    })
