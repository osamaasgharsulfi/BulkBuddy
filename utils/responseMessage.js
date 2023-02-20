exports.responseMessage = (res, status, customStatus, message, data) => {
    res.status(status).send(data === null ? { status: customStatus, message } : { status: customStatus, message, data })
}