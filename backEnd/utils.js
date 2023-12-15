module.exports.ReE = function (res, err, code, log = null) { // Error Web Response
    if (typeof err == 'object' && typeof err.message != 'undefined') {
        err = err.message;
    }
    if (typeof code !== 'undefined') res.statusCode = code;
    if (log == null) {
        return res.json({ success: false, error: err });
    } else {
        return res.json({ success: false, error: err, log: log });
    }
};

module.exports.ReS = function (res, data, code) { // Success Web Response
    let send_data = { success: true };

    if (typeof data == 'object') {
        send_data = Object.assign(data, send_data);//merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    return res.json(send_data)
};

module.exports.TE = function (err_message, log) { // TE stands for Throw Error
    if (log === true) {
        console.error(err_message);
    }
    throw new Error(err_message);
};

module.exports = exports;