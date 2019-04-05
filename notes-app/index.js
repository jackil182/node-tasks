const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// const msg = getNotes();
// console.log(msg);
// console.log(chalk.green.bold.inverse('Success'));
// console.log(chalk.red('Oh nooo!'));

yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
    // console.log('Title: ' + argv.title, 'Body: ' + argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
    // console.log('Removing a note')
  }
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log(chalk.blue.inverse('Listing all notes'));
    notes.listNotes();
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log('Reading a note')
    notes.readNote(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();