function showLoader(isTrue) {
    if (isTrue) {
        const loaderWrapper = document.createElement('div');
        loaderWrapper.className = 'loader-wrapper';

        const loader = document.createElement('div');
        loader.className = 'loader';

        loaderWrapper.appendChild(loader);
        document.body.appendChild(loaderWrapper);
    } else {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        if (loaderWrapper) {
            loaderWrapper.parentNode.removeChild(loaderWrapper); 
        }
    }
}