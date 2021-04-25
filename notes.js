const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
	const notes = loadNotes()

	// const duplicates = notes.filter( function (note) {
	// 	return note.title === title;
	// })
	const duplicateNote = notes.find((note) => note.title === title)
	
	if(!duplicateNote) {
		notes.push ({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.greenBright.bold("New Note added"));
	}
	else {
		console.log(chalk.redBright.bold("Note already exists"));
	}
}

const removeNote = (title) => {
	const notes = loadNotes()

	const notesToKeep = notes.filter((note) => note.title !== title)

	if(notes.length === notesToKeep.length) {
		console.log(chalk.redBright.bold("No Note found"));
	}
	else {
		saveNotes(notesToKeep);
		console.log(chalk.greenBright.bold("Note removed"));
	}
}

const listNotes = () => {
	const notes = loadNotes()

	console.log(chalk.yellowBright.bold("Your Notes are"));
	notes.forEach(note => {
		console.log(note.title)
	})
}

const readNote = (title) => {
	const notes = loadNotes()

	const readnote = notes.find((note) => note.title === title)

	if(readnote) {
		console.log(chalk.cyanBright.bold("Your Note is"));
		console.log(readnote.title);
		console.log(readnote.body);
	}
	else {
		console.log(chalk.redBright.bold("Note does not exists"));
	}
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	}
	catch(e) {
		return [];
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
};