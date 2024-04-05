let btn = document.getElementById("btn");
let count = 1;
let check= true; 

btn.addEventListener("click", () => {
  if (check) {
    btn.textContent = `Click me ${count}`;
    count++;
    if (count === 11) {
      check = false; 
    }
  } else {
    count--;
    btn.textContent = `Click me ${count}`;
    if (count === 1) {
      check = true; 
    }
  }
});
