const fs = require('fs');

/**
 *
 * @param {*} array
 */
const getNewId = (array) => {
	if (array.length > 0) {
		return array[array.length - 1].id + 1;
	} else {
		return 1;
	}
};

const newDate = () => new Date().toString();

/**
 *
 * @param {*} array
 * @param {*} id
 */
function mustBeInArray(array, id) {
	return new Promise((resolve, reject) => {
		const row = array.find(r => r.id == id);
		if (!row) {
			reject({
				message: 'ID is not good',
				status: 404
			});
		}
		resolve(row);
	});
}

/**
 *
 * @param {*} filename
 * @param {*} content
 */
function writeJSONFile(filename, content) {
	fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
		if (err) {
			console.log(err);
		}
	});
}
/**
 * Suma de parametros
 * @author ezTicket <info@inzonesoft.com>
 * @param {number} parametro - Primer parametro
 * @param {number} segundoParametro - Este es el segundo parametro
 * @return {number} suma - Suma de parametros
 * @example
 * estoEsUnaPrueba(1,2) => 3
 */
function estoEsUnaPrueba(parametro, segundoParametro)
{
	return parametro + segundoParametro;
}

module.exports = {
	getNewId,
	newDate,
	mustBeInArray,
	writeJSONFile
};