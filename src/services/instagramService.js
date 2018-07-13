const _singleton = Symbol();

export default class InstagramServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new InstagramServiceClient(_singleton);
        return this[_singleton]
    }

    findAllImagesForUser(callback, errorCallback) {
        return fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=30602579.abe38ea.d067ea51a98a47869ee2d769a9fbaed3')
            .then(function (response) {
                const responseJson = response.json();
                if (response.ok) {
                    return responseJson.then(callback);
                }
                return responseJson.then(errorCallback);
            });
    }
}