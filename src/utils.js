// Funktion för att generera en array med olika höjder på stacksen baserat på arraySize, från 1 - Arraysize i procent
export const generateRandomStackHeights = (size) => {
  const heights = Array.from({ length: size }, (_, index) => index + 1);
  const shuffledHeights = shuffleArray(heights);
  console.log(shuffledHeights);
  return shuffledHeights;
};

// Funktion for att shufflea array stacks
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
