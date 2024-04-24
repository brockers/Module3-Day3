import fs from 'fs';
import _ from 'lodash';
import { color, log, red, green } from 'console-log-colors';

const myarray = [ 1, 2, 3, 4, 5, 8, 4, 3, 9 ];

console.log(color.red(myarray));

const output = _.uniq(myarray);

console.log(output);

// echo 'node_modules/*' > .gitignore
// git add -A
// git commit -m "Some message"

// Sync File Access
const file = fs.readFileSync('./data.json', {encoding: 'utf8'});
console.log(color.red(file));

// An ASync File Access method
fs.readFile('./data.json', {encoding: 'utf8'}, (err,f) => console.log(color.green(f)));