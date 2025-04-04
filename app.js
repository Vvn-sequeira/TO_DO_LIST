let btn = document.querySelector("button");
let arrText = JSON.parse( localStorage.getItem("todoList")) || [];
let i=0;
btn.addEventListener("click" , ()=> {
 
    let input = document.querySelector("input");
     let text = input.value ;

    if(text == '')
    {
          alert("The input for TODO list is Empty \n please enter the Text");
    }
    else{
          console.log(text)
          let divv = document.createElement("div");
          divv.classList.add("list"); 
          
          let finalText = `${++i}. ${text}`;
          divv.append(finalText); 
          arrText.push(finalText);
          localStorage.setItem("todoList" , JSON.stringify(arrText)); 
        //   let listbox = document.querySelector(".listbox");
          let para = document.querySelector(".para");
          para.insertAdjacentElement('beforebegin',divv);
          input.value = ''; 
   
    }

})

window.addEventListener("DOMContentLoaded",() => {
    arrText.forEach(text => {
        let divv = document.createElement("div"); 
        divv.classList.add("list"); 
        divv.append(text); 
        let para = document.querySelector(".para");
        para.insertAdjacentElement('beforebegin',divv);
    });
})

let secondbtn = document.querySelector(".secondbtn");


secondbtn.addEventListener("click" , () => {
    if(arrText.length == '')
    {
          alert(" YOUR TO-DO List is Empty  "); 
          return;
    }
    let popup = document.querySelector(".popup");
    popup.style.display = 'block'; 
    let yes = document.querySelector('.btn1');
    let no = document.querySelector('.btn2');
    yes.addEventListener("click" , ()=> {
     localStorage.removeItem("todoList"); 
     location.reload();
    })
    no.addEventListener("click", ()=> {
         location.reload();
    })
   
})

let inp = document.querySelector("input");
inp.addEventListener('keydown',(e)=> {
     if(e.key == "Enter")
     {
          btn.click();
     }
})

let body = document.querySelector(".listbox");

body.addEventListener("click", ()=> {
      inp.focus();
})