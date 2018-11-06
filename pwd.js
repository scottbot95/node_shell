module.exports = function() {
  const output =  process.cwd();
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};
