// A Fetch API Example
// The example below fetches a file and displays the content:
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => dataLoad(data))

function dataLoad(data){
    const section = document.getElementById('section');
    for(const resource of data){
        const div = document.createElement('div');
        div.innerHTML = `<h5>${resource.albumId}</h5>
        <h4>${resource.id}</h4.
        <h2>${resource.title}</h2>
        <img src="${resource.url}">
        <img src="${resource.thumbnailUrl}">`;
        section.appendChild(div);
    }
}