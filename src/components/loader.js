function showLoader(isTrue) {
    if (isTrue) {
        loaderWrapper = document.createElement('div');
        loaderWrapper.className = 'loader-wrapper';

        const loader = document.createElement('div');
        loader.className = 'loader';

        loaderWrapper.appendChild(loader);
        document.body.appendChild(loaderWrapper);
    } else {
        if (loaderWrapper) {
            document.body.removeChild(loaderWrapper);
            loaderWrapper = null;
        }
    }
}