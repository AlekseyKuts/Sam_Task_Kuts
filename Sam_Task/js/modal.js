let modal = document.getElementById("myModal");

let btn = document.getElementById("checkoutButton");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () { 
  localStorage.clear(); 
  let lis = document.querySelectorAll("#cart__list li"); 
  for (var i = 0; (li = lis[i]); i++) { 
    li.parentNode.removeChild(li); 
  } 
  document.querySelector("#total_price").innerHTML = "0$"; 
  modal.style.display = "flex"; 
}; 
 
// Когда пользователь щелкает в любом месте за пределами модального, закройте его 
window.onclick = function (event) { 
  if (event.target == modal) { 
    modal.style.display = "none"; 
    document.location.reload(); 
  } 
};