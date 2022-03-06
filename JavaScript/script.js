// Ekle butonuna tikladigimizda yeni liste ögesi olusturma
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#task').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue ==="") {
        alert("Listeye boş ekleme yapamazsınız!");
    }
    else {
        document.querySelector("#list").appendChild(li);
    }
    document.querySelector("#task").value="";
    
    let span = document.createElement('span');
    let script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.lordicon.com/lusqsztk.js')
    let lordicon = document.createElement('lord-icon')
    lordicon.setAttribute('src', 'https://cdn.lordicon.com/qsloqzpf.json')
    lordicon.setAttribute('trigger', 'hover')
    lordicon.setAttribute('colors', 'primary:#121331')
    lordicon.setAttribute('style', 'width:24px;height:24px')
    
    span.className='close0';
    span.appendChild(lordicon);
    li.appendChild(span);

    for (let i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

// Kapatma dugmesi olusturma ve bunu tum liste ogelerine ekleme
let myList = document.getElementsByTagName('LI');
var i;
for (i=0; i<myList.length; i++) {
    let span = document.createElement('SPAN');
    let script = document.createElement('SCRIPT');
    script.setAttribute('src', 'https://cdn.lordicon.com/lusqsztk.js');
    let lordicon = document.createElement('lord-icon');
    lordicon.setAttribute('src', 'https://cdn.lordicon.com/qsloqzpf.json');
    lordicon.setAttribute('trigger', 'hover');
    lordicon.setAttribute('colors', 'primary:#121331');
    lordicon.setAttribute('style', 'width:24px;height:24px');
    span.className="close0";
    span.appendChild(lordicon);
    myList[i].appendChild(span);
}

// Kapat butonuna tiklandiginda gecerli liste ogesini gizlemek
let close = document.getElementsByClassName('close0');
var i;
for (i=0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Liste ogesine tiklandiginda isaretleme
let list =document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false)


