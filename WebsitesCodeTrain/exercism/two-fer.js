 const twoFer = (x='you') => {
    return `One for ${x}, one for me.`
  };

  console.log(twoFer('Alice')); // One for Alice, one for me.
  console.log(twoFer('Bob')); // One for Bob, one for me.
  console.log(twoFer()); // One for you, one for me.
  console.log(twoFer('Zaphod')); //One for Zaphod, one for me.
  
