let timeout;

function showSource(id) {
    const source = document.getElementById(id);
    source.classList.add('visible');
    clearTimeout(timeout);
}

function hideSource(id) {
    const source = document.getElementById(id);
    timeout = setTimeout(() => {
        source.classList.remove('visible');
    }, 5000);
}

document.getElementById('showPopupBtn').addEventListener('click', showPopup);

function showPopup() {
    const popup = document.getElementById('myPopup');

    popup.classList.remove('hide'); 
    popup.classList.add('show'); 

    setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('hide');
    }, 5000);
}





