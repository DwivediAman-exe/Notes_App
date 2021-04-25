const fs = require("fs");

const getNotes = function () {
	return "your Notes...";
}

const addNote = function(title, body) {
	const notes = loadNotes()
}

const loadNotes = function() {
	const dataBuffer = fs.readFileSync('notes.json');
	const dataJSON = dataBuffer.toString();
	return JSON.parse(dataJSON);
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote
};