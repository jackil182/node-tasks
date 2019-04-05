const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    const notesStr = notesBuffer.toString();
    return JSON.parse(notesStr);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notesArr) => {
  fs.writeFileSync('notes.json', JSON.stringify(notesArr))
}

const addNotes = (title, body) => {
  const notesArr = loadNotes();
  const hasDuplicates = notesArr.some(el => el.title === title);

  // debugger;

  if(hasDuplicates) {
    console.log(chalk.red.inverse('note with such title already exists'))
  } else {
    notesArr.push({title, body});
    saveNotes(notesArr);
    console.log(chalk.green.inverse('note was saved'))
  }
}

const removeNote = (title) => {
  const notesArr = loadNotes();
  const filteredNotes = notesArr.filter(el => el.title !== title);
  if(filteredNotes.length === notesArr.length) {
    console.log(chalk.red.bold('no such note to remove'));
  } else {
    saveNotes(filteredNotes);
    console.log(chalk.green.bold('note was removed'));
  }
}

const listNotes = () => {
  const notesArr = loadNotes();
  notesArr.forEach(el => console.log(chalk.yellow(el.title)))
}

const readNote = (title) => {
  const notesArr = loadNotes();
  const noteToRead = notesArr.find(el => el.title === title);
  if(!noteToRead) {
    console.log(chalk.bgRed('no notes found'));
  } else {
    console.log(chalk.bgBlue.white.inverse.bold(title));
    console.log(noteToRead.body)
  }
}

module.exports = {
  addNotes,
  removeNote,
  listNotes,
  readNote,
};