function isPalindrome(sampleContent) {
    const stringLowerCase = sampleContent.replace(/[^a-zA-Z0-9]/g, '');
  
    const stringUpdate = stringLowerCase.toLowerCase();
    const stringUpdate2 = stringUpdate.split('');
    const stringUpdate3 = stringUpdate2.reverse('');
    return stringLowerCase === stringUpdate3.join('');
  }
  const exampleString = "hello";
  const result = isPalindrome(exampleString);

  console.log(result);