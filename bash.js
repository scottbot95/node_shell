//Output a prompt
process.stdout.write('prompt> ');
//The stdin 'data' event fires after a user tyes in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    let output;
    if (cmd.startsWith('pwd')) {
        output = pwd();
    }
    if (output) { process.stdout.write(output) }
    process.stdout.write('\nprompt > ')
});
function pwd() {
    return process.cwd()
}