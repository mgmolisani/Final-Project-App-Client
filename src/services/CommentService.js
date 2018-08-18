let _singleton = Symbol();
const COMMENT_API_URL = "https://mmolisani-final-project-node.herokuapp.com/api/comment";

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

    createComment(comment) {
        return fetch(COMMENT_API_URL, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }

    deleteComment(commentId) {
        return fetch(COMMENT_API_URL + '/' + commentId, {
            method: 'DELETE'
        })
    }
}