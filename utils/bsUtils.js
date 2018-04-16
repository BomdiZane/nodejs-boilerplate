function textResponse(response, message) {
    response.type('text/plain');
    response.end(message);
}

function renderError(response){
    response.render('500', {
        title: 'Not Found - Bomdi Zane',
        stylesheet: '/css/error.min.css'
    });
}

module.exports = {
    textResponse,
    renderError
};