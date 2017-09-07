let link = "imdb.json";
let template = document.querySelector('template').content;
let main = document.querySelector('main');
function getData(link){
    fetch(link).then(response=>response.json()).then(json=>show(json));
}
function show(json){
    json.forEach(elm=>{
        let clone = template.cloneNode(true);
        clone.querySelector('.poster').src = "image/" + elm.image;
        clone.querySelector('.title').textContent = "Title: " + elm.title;
        clone.querySelector('.year').textContent = "Year: " + elm.year;
        clone.querySelector('.length').textContent = elm.length + ". minutes";
        clone.querySelector('.genres').textContent = "Genres: " + elm.genres;
        clone.querySelector('.director').textContent = "Director: " + elm.director;
        clone.querySelector('.stars').textContent = "Actor: " + elm.starts;
        clone.querySelector('.resume').textContent = "Resume: " + elm.resume;
    main.appendChild(clone);
    })
}
getData(link);
