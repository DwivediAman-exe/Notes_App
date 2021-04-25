const chalk = require("chalk");
const fs = require("fs");

const getNotes = function () {
	return "your Notes...";
}

const addNote = function(title, body) {
	const notes = loadNotes()

	const duplicates = notes.filter( function (note) {
		return note.title === title;
	})
	
	if(duplicates.length === 0) {
		notes.push ({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.greenBright.inverse.bold("New Note added"));
	}
	else {
		console.log(chalk.red.inverse.bold("Note already exists"));
	}
}

const removeNote = function (title) {
	const notes = loadNotes()

	const notesToKeep = notes.filter( function(note) {
		return note.title !== title
	})

	if(notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse.bold("No Note found"));
	}
	else {
		saveNotes(notesToKeep);
		console.log(chalk.green.inverse.bold("Note removed"));
	}
}

const loadNotes = function() {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	}
	catch(e) {
		return [];
	}
}

const saveNotes = function(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
};