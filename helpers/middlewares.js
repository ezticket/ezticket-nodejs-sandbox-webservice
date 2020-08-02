function checkNumericId (req, res, next) {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' });
    } else {
        next();
    }
}

function checkFieldsPost (req, res, next) {
    const { title, content, tags } = req.body;

    if (title && content && tags) {
        next();
    } else {
        res.status(400).json({ message: 'fields are not good' });
    }
}

function checkFieldsScan (req, res, next) {
    const { id, name, createdAt } = req.body;

    if (id && name && createdAt) {
        next();
    } else {
        res.status(400).json({ message: 'Parameters are missing' });
    }
}

function checkFieldsSell (req, res, next) {
    if (!Array.isArray(req.body)) {
        res.status(400).json({ message: 'Parameter must be an array' });
    } else {
        next();
    }
}

module.exports = {
    checkNumericId,
    checkFieldsPost,
    checkFieldsScan,
    checkFieldsSell
};
