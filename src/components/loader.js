function showLoader(isTrue,container) {
    
    if (isTrue) {
        loaderWrapper = document.createElement('div');
        loaderWrapper.className = 'loader-wrapper';

        const loader = document.createElement('div');
        loader.className = 'loader';

        loaderWrapper.appendChild(loader);
        container.appendChild(loaderWrapper);
    } else {
        
        container.removeChild(document.querySelector('.loader-wrapper'));
    }
}