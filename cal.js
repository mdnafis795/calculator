const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen'); 
const col = document.getElementsByClassName('class');
let screenValue = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === 'X') {
      screenValue += '*';
    } else if (buttonText === '/') { 
      screenValue += '/';
    } else if (buttonText === 'C') {
      screenValue = '';
    }
    else if (buttonText === 'sin') {
   const x = (screen.value); 
      if(x ==='0'){
        screenValue = 0;
      }else{

          const radians = (x * Math.PI) / 180;
          screenValue = Math.sin(radians);
      }
    
    } else if (buttonText === 'cos') {
   const x = (screen.value); 
   if(x==='90'){
    screenValue =0;
   }else{
       const radians = (x * Math.PI) / 180;
       screenValue = Math.cos(radians);
}
    }else if(buttonText ==='tan'){
      const x = (screen.value);
      if(x==='90'){
        screenValue = 'Not Defined';
      }else{
      const radians = (x*Math.PI)/180;
      screenValue = Math.tan(radians);  
      }
    }else if (buttonText === 'cot') {
      const x = (screen.value);
      if(x==='90'){
        screenValue = '0';
      }else{
        
      const radians = (x * Math.PI) / 180;
      screenValue = 1 / Math.tan(radians); 
      }
    }else if(buttonText ==='^'){
     
        screenValue +='**'; 
      }else if(buttonText==='e'){
        const x = screen.value;
        screenValue = Math.exp(x);
      }else if(buttonText==='log'){
        const x = screen.value;
        screenValue = Math.log10(x);
      }else if(buttonText==='√'){
    
        screenValue = Math.sqrt(screen.value);
      }
    else if (buttonText === '=') {
      screenValue = eval(screenValue);  
    }else if(buttonText === 'DE'){
      screenValue = screenValue.slice(0,-1);
      screen.value = screenValue;
    }
    else {
      screenValue += buttonText;
    }
    screen.value = screenValue;
  });
});





