
let next =document.querySelector('.next')
let back =document.querySelector('.back')

 let min  = document.querySelectorAll('.min');
 let max  = document.querySelector('.max');
 



 let indexs = 0;
 let allelem = min.length;
 

 document.querySelector('.next').addEventListener('click', function(){
  if (indexs < allelem + 1) {
      indexs++; 
  }else{
      indexs = 0; 
  }

   

  document.querySelector('.active')?.classList.remove('active');
      min[indexs].classList.add('active')
       let src  = min[indexs].src;
     max.src = src;
  
})




document.querySelector('.back').addEventListener('click', function(){
    if (indexs < allelem + 1 ) {
        indexs--; 
    }else{
        indexs = 0; 
    }
  
     
  
    document.querySelector('.active')?.classList.remove('active');
        min[indexs].classList.remove('active')
         let src  = min[indexs].src;
       max.src = src;
    
  })
  