let _singleton = Symbol();
const COMMENT_API_URL = "http://localhost:4200/api/comment";

export default class CommentService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CommentService(_singleton);
        return this[_singleton]
    }


    findPosterForComment(commentId) {
        return fetch(COMMENT_API_URL + '/' + commentId + '/poster')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }
}