const loaderwrapper=document.createElement('div');
  loaderwrapper.className='loader-wrapper';

  const loader=document.createElement('div');
  loader.className='loader';
  loaderwrapper.appendChild(loader);

function showloader(){
    var body = document.body;

  body.insertBefore(loaderwrapper, body.firstChild);
}
function removeloader() {
    var body = document.body;
    var loaderwrapper = document.querySelector('.loader-wrapper'); // Select by class name
    

    if (loaderwrapper && loaderwrapper.parentNode === body) {
        body.removeChild(loaderwrapper);
    }
}