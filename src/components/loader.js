const loaderwrapper=document.createElement('div');
  loaderwrapper.className='loader-wrapper';

  const loader=document.createElement('div');
  loader.className='loader';
  loaderwrapper.appendChild(loader);

function showloader(){
    var body = document.body;

  // Insert loaderwrapper before the first child of body
  body.insertBefore(loaderwrapper, body.firstChild);
}
function removeloader() {
    var body = document.body;
    var loaderwrapper = document.querySelector('.loader-wrapper'); // Select by class name
    
    // Check if loaderwrapper exists in the body
    if (loaderwrapper && loaderwrapper.parentNode === body) {
        // Remove loaderwrapper from the body
        body.removeChild(loaderwrapper);
    }
}