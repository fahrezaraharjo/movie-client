const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c09cab799127402a71820b61c4aaaefe',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;