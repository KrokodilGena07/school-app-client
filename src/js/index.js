const news = document.getElementById('news');

fetch('http://localhost:5000/api/posts')

    .then(data => {
        let html = '';
        console.log(data.json())
        news.innerHTML = html;
    })