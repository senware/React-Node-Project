const jwt = require('jsonwebtoken')

const authenticate = (request, response, next) => {
    const token = request.body.token || request.query.token || request.headers['x-access-token']
    !token && response.status(403).send('A token is required for authentication')
    try {
        const token = jwt.verify(token, process.env.TOKEN_KEY)
        request.user = token
    }
    catch (err) {
        response.status(401).send('Invalid token')
        return
    }
    next()
}

module.exports = authenticate