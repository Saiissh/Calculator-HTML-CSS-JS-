
let buttons = document.querySelectorAll(".keys");

let initialinput=document.querySelector(".initial");
let currinput=document.querySelector('.currInput');
let string='';
let initialsum='';
let flag=true;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        
      try {

        if(buttons[i].innerHTML=='+' || buttons[i].innerHTML=='-' || buttons[i].innerHTML=='*' || buttons[i].innerHTML=='/' || buttons[i].innerHTML=='AC')
        {flag=true;console.log(flag);}

        if(buttons[i].innerHTML=='AC')
        {
            initialinput.innerHTML='';
            currinput.innerHTML='0';
            initialsum='';
            string='';
            
        }

        else if(buttons[i].innerHTML=='=')
        {
          flag=false;
          console.log(flag);
            if(string.length==0)
            {
                currinput.innerHTML=0;return;
 
            }
            string=eval(string);
            currinput.innerHTML=string;
           string=currinput.innerHTML;
           initialsum=string;
           console.log(string,initialsum);
            
        }

        else if(buttons[i].innerHTML=='%')
        {
            string=eval(string*0.01)
            currinput.innerHTML=string;
            
        }

        
        else if(buttons[i].innerHTML==00)
        {
            string=eval(string*100)
            currinput.innerHTML=string;
            return;
        }

         else if(buttons[i].innerHTML=='0' && string.length==0)
        {
          string='';
            return;
        }
        
        else if(buttons[i].innerHTML=='Del')
        {
            if(string.length<1)
            {
              currinput.innerHTML=0;
              string='';
              return;
            }

            if(string===initialsum)return;
           
            
           string=string.substring(0,string.length-1);
            currinput.innerHTML=string;
           
            
        }
       

        else{

          if(flag==false)return;

        string+=buttons[i].innerHTML;
        currinput.innerHTML=string;

        }

      } catch (error) {
        currinput.innerHTML="Error";
        string='';
      }
        
     });

   
}


