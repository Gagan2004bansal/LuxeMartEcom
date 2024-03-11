async function searchData(event) {
    event.preventDefault();

    try {
        var response = await fetch('./data/mobile.json');
        var jsonData = await response.json();

        let Search = document.querySelector("#SearchBar").value;

        console.log(Search);
    } catch (error) {
        console.error('Error fetching JSON data');
    }
}

document.querySelector('#searchData').addEventListener('submit', searchData);