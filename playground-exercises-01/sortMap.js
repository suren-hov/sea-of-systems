const code = [
    { type: 'var', name: 'x' },
    { type: 'let', name: 'y' },
    { type: 'const', name: 'z' },
    { type: 'var', name: 'a' }
  ];
  
  // Sort the array based on the `type` property, putting 'var' first
  code.sort((a, b) => {
    if (a.type === 'var' && b.type !== 'var') {
      return -1; // Move 'var' to an earlier position
    } else if (a.type !== 'var' && b.type === 'var') {
      return 1; // Move 'var' to an earlier position
    }
    return 0; // Keep the order the same for other types
  });
  
  console.log(code);