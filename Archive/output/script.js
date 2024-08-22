document.getElementById('picker').addEventListener('click', function() {
    let emoji = event.target.textContent;
    let wikiInfo = `<a href="https://www.wikidata.org/wiki/User:Gpt.univers-mc/${emoji.codePointAt(0) - 127542}" target="_blank">${emoji}</a>`;
    document.getElementById('wiki-info').innerHTML = wikiInfo;
    document.querySelector('.myModalJS').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.myModalJS').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.querySelector('.myModalJS')) {
        document.querySelector('.myModalJS').style.display = 'none';
    }
});