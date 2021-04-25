const yargs = require("yargs");
const notes = require("./notes.js");

// add, remove, read, list

// add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: "Note Description",
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

// remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

// list command
yargs.command({
	command: 'list',
	describe: 'listing all notes',
	handler() {
		notes.listNotes()
	}
});

// read command
yargs.command({
	command: 'read',
	describe: 'reading a note',
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv) {
		notes.readNote(argv.title)
	}
});

yargs.parse();