interface ThemeColors {
    text: string;
    bgColor: (opacity: number) => string;
  }
  
  const themeColors: ThemeColors = {
    text: '#f97316', // Color values in CSS should be strings
    bgColor: (opacity: number) => `rgba(251, 146, 60, ${opacity})`, // bgColor as a function returning rgba color with opacity
  };
  
  export default themeColors;