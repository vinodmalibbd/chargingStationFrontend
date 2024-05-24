function mapsearch(){
    const map=document.querySelector('#map');
    const searchmain=document.createElement('div');
    searchmain.className='mapsearchmain';

    const searchcontainer=document.createElement('div')
    searchcontainer.className='searchcontainer';

    const searchbarcontainer=document.createElement('div');
    searchbarcontainer.className='mapsearchbarcontainer';
    const suggestionscontainer=document.createElement('div');
    suggestionscontainer.className='suggestioncontainer';
    const searchinput=document.createElement('input');
    searchinput.className='mapsearchinput';
    searchinput.onchange=(e)=>{
        // fetchCitySuggestions(e.target.value,suggestionscontainer)
    }


    searchbarcontainer.appendChild(searchinput);
    
    searchinput.setAttribute('placeholder','Search location...')
    
    searchcontainer.appendChild(searchbarcontainer);
    searchcontainer.appendChild(suggestionscontainer);
    searchmain.appendChild(searchcontainer);
    map.appendChild(searchmain);
}


function fetchCitySuggestions(query,suggestionscontainer) {
    const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(query)}&format=json&limit=5`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const suggestlistcard=document.createElement('address');
        suggestlistcard.className='suggestlistcard';
        suggestlistcard.textContent=data.display_name;
        suggestionscontainer.appendChild(suggestlistcard);

      })
      .catch(error => {
        console.error('Error fetching city suggestions:', error);
      });
  }
