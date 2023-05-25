


function error(){
    alert("The current page isn't working right now! Try Again Later")
}



function buttonLabelDisplay(n){


    var contentElement = document.getElementById(n);
    
        contentElement.style.display = 'block'
    


}



function buttonLabelHide(n){


    var contentElement = document.getElementById(n);

    contentElement.style.display = 'none'
    


}



function themeBright(){


    var bgChanger=document.getElementsByClassName('cards');
    

    for(let i=0;i<5;i++){
        
        
        bgChanger[i].style.filter='invert(1)'
        bgChanger[i].style.transition='0.7s'
    }

    
        
}



function themeDark(){
 

    var bgChanger=document.getElementsByClassName('cards');
    

    for(let i=0;i<5;i++){
        bgChanger[i].style.filter='invert(0)';
        bgChanger[i].style.transition='0.7s'

    }

    
    
}



var a = true
function themeBtn(){

   if(a){
    themeBright()
    a=false
   }else{
    themeDark()
    a=true

   }
}