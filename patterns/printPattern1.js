function printPattern(r, c) {
  if (r === 0) {
    return;
  }
  if (c < r) {
    process.stdout.write('*');
    printPattern(r, c + 1);
  } else {
    console.log(); 
    printPattern(r - 1, 0);
  }
}

printPattern(5, 0);
