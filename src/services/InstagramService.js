let _singleton = Symbol();
const INSTAGRAM_API_URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN';

export default class InstagramService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new InstagramService(_singleton);
        return this[_singleton]
    }

    findInstagramPhotos(token) {
        return fetch(INSTAGRAM_API_URL
            .replace('ACCESS-TOKEN', token))
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }
}