function printPattern(r, c) {
  if (r === 0) {
    return;
  }
  if (c < r) {
    printPattern(r, c + 1);
    process.stdout.write('*');
  } else {
    printPattern(r - 1, 0);
    console.log(); 
  }
}

printPattern(5, 0);
