const pwd = require('./pwd');

//Output a prompt
const prompt = 'prompt> ';

process.stdout.write(prompt);
//The stdin 'data' event fires after a user tyes in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd.startsWith('pwd')) {
        pwd();
    }
});

