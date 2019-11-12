var btn = document.getElementById('btn');

btn.onclick = function () {
    var h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:8000/add?type=pro', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({
            a: [100, 200, 300]
        })
    }).then(data => data.json()).then(data => {
        console.log(data);
    })
}

btn2.onclick = function () {
    fetch('http://localhost:8080/list?type=pro&q=123&a=234', {
        method: 'get'
    }).then(data => data.json()).then(data => {
        console.log(data);
    })
}