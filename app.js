const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

console.log(chalk.yellowBright.inverse.bold("Success"));

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
	handler: function(argv) {
		notes.addNote(argv.title, argv.boody);
	}
});

// remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function() {
		console.log("removing a note")
	}
});

// list command
yargs.command({
	command: 'list',
	describe: 'listing all notes',
	handler: function() {
		console.log("listing all notes")
	}
});

// read command
yargs.command({
	command: 'read',
	describe: 'reading a note',
	handler: function() {
		console.log("read a note")
	}
});

yargs.parse();