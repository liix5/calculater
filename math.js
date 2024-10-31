let nums= document.querySelectorAll('.black')
let input = document.querySelector('.result')
let math = document.querySelector('.math')
let oper = document.querySelectorAll('.orange')
let btns = document.querySelectorAll('button')
let equal = document.querySelector('.equal')
let clear = document.getElementById('clear')
let deletebtn = document.getElementById('delete')
let posMin = document.getElementById('posNegBtn')
let sun = document.querySelector('.sun')
let body = document.body
let back = document.querySelector('.dark')
let corner = document.querySelector('.corner')
let moon = document.querySelector('.moon')
let up = document.querySelectorAll('.grey')




let doagain =true

class calculate {
  constructor(curr,prev){
    this.curr=curr
    this.prev = prev
    this.clear()
  }

  clear(){
   
    this.curr.innerText=''
    this.prev.innerText=''
    
  }

  display(number){
     this.curr.innerText += number
     
     
  }
  
  //اكبر انجاز في حياتي
  again(doagain){
    if(doagain == false){
    btns.forEach(btn=>{
      console.log(this.prev.innerText)
      btn.addEventListener('click', ()=>{
        
        
       if (btn.className !== 'orange'  && doagain == false && btn.id !== 'clear' && btn.className !== 'grey' ) {
        if (btn.className =='equal') {
          
          this.prev.innerText=''
          this.curr.innerText=''
          return
        }
          this.curr.innerText=btn.innerText
          this.prev.innerText=''
          doagain = true
       
          
          return
          
        }
        doagain = true
      })
      
    })}
  }
  


  

  opreations(opreation){
    
    let compute;
    switch (this.opreation) {
      case '+':
        compute = Number(this.curr.innerText) + Number(this.prev.innerText.replace(this.opreation,""))
        break;
    
      case '-':
        //allow for -3-3 to happen 
        let subPrev
         if (this.prev.innerText.split('-').indexOf('')==1) {
           subPrev= this.prev.innerText.split('-')[0]
        }else{
          subPrev= -(this.prev.innerText.split('-')[1])
        }
        compute = Number(subPrev) -Number( this.curr.innerText )
        break;

      case 'x':
        compute =Number(this.curr.innerText) * Number(this.prev.innerText.replace(this.opreation,""))
        break;

      case '/':
        compute = Number(this.prev.innerText.replace(this.opreation,"")) /Number(this.curr.innerText)  
        break;

        default: 
    return
    }
   
    
      console.log(compute)
      if (compute == NaN) {
        console.log('errror')
      }
      this.prev.innerText +=this.curr.innerText
      this.curr.innerText = compute

      
                      
  }
}

let maths = new calculate(input,math)


nums.forEach(num=>{
  num.addEventListener('click', ()=>{
    doagain = true
    maths.again(doagain = true)
    if(input.innerText.length <=9){
      maths.display(num.innerText)
      
    }  
  if(input.innerText.length >=8){
      input.style.fontSize='50px'
    }else{
      input.style.fontSize='58px'
    }
   console.log(doagain)

  })
})
clear.addEventListener('click',()=>{
  maths.clear()
  maths.again(doagain = true)
})


oper.forEach(op=>{
  op.addEventListener('click', ()=>{
    if(input.innerText!=''){
    doagain = true
    maths.display(op.innerText)
     math.innerText = input.innerText
    
    input.innerText =''
    maths.opreation= op.id
    maths.again(doagain = true)}
    
  })
})

equal.addEventListener('click',()=>{
  
  if(input.innerText!='' && math.innerText!=''){  
    maths.opreations()
    maths.again(doagain = false)
    
  }
  
})





deletebtn.addEventListener('click',()=>{
  if (input.innerText.length !=0) {
    let deleted = input.innerText.substring(0, input.innerText.length - 1);
  input.innerText = deleted
  }
})

posMin.addEventListener('click',()=>{
  
  if (input.innerText.includes('-')) {
    
   let minPos= input.innerText.replace('-', "");
   input.innerText = minPos
  }else{
    input.innerText =  '-'+input.innerText
    
  }
  
 

})





dark=()=>{
  back.classList.toggle('lightback')
  corner.classList.toggle('lightcorner')
  moon.style.cssText = `
  opacity: 1;
 pointer-events: all;
 transition: all 1s ease;
 
`;
sun.style.cssText = `
opacity: 0;
pointer-events: none;
transition: all .2s ease-in-out;

`;
nums.forEach(num => {
  num.style.cssText = `
background: radial-gradient(76.87% 76.87% at 15% 15%, #C9C9C9 19.79%, #E4ECF9 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -4px 4px #CCCDCE, inset 4px 4px 3px #E0E6F1;
border-radius: 25px;
color: #414B5D;
transition: all .5s ease;

`;
});

up.forEach(one=>{ 
one.style.cssText = `
background: radial-gradient(76.87% 76.87% at 15% 15%, #A3A5A9 16.67%, #D2D9E7 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), inset -4px -4px 4px #A8AAAF, inset 4px 4px 3px #CDD0D7;
border-radius: 25px;
color: #3A4457;
transition: all .5s ease;

`;
input.style.cssText ='color: #383B46;'
})

}

light=()=>{
  back.classList.toggle('lightback')
  corner.classList.toggle('lightcorner')
  moon.style.cssText = `
  opacity: 0;
 pointer-events: none;
 transition: all .2s ease;
 
`;
sun.style.cssText = `
opacity: 1;
pointer-events: all;
transition: all .2s ease-in-out;

`;
nums.forEach(num => {
  
  num.style.cssText = `
  
  background: radial-gradient(76.87% 76.87% at 15% 15%, #2F3643 26.56%, #3E4655 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 4px #31363F, inset 4px 4px 3px #383F4C;
border-radius: 25px;
border: none;
transition: all .2s ease;
`;
});

up.forEach(one=>{ 
one.style.cssText = `
background: radial-gradient(76.87% 76.87% at 15% 15%, #425160 0%, #606A7E 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 4px #4D5666, inset 4px 4px 3px #60697A;
border-radius: 25px;
transition: all .5s ease;

`;
input.style.cssText ='color: rgba(255, 255, 255, 0.94);'

})

}


