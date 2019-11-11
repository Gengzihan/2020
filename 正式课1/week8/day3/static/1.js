var btn = document.getElementById('btn');

btn.onclick = function () {
    var h1 = document.getElementsByTagName('h1')[0];
    h1.style.background = 'blue';
    fetch('http://localhost:3000/list').then(data => data.json()).then(data => {
        console.log(data);
    })
}