const firebaseConfig = {
  apiKey: "AIzaSyCkDL6o5zIadycIqJoROr48mqUB3EkZab0",
  authDomain: "mikutoys-d47de.firebaseapp.com",
  databaseURL: "https://mikutoys-d47de-default-rtdb.firebaseio.com",
  projectId: "mikutoys-d47de",
  storageBucket: "mikutoys-d47de.appspot.com",
  messagingSenderId: "453934610008",
  appId: "1:453934610008:web:092e9ad475e2c675773c2d"
};

firebase.initializeApp(firebaseConfig);
function mail(){
	alert("Mail: hazarikaananya5@gmail.com")
}
function customercare() {
	alert("CustomerCare number: +91 9871366468")
}



function addtocart(id) {
if (localStorage.getItem('items')== null) {
  e=[]
  item_name= document.getElementById(id).value; 
  console.log(id)
  console.log(item_name)
  e.push(item_name)
  localStorage.setItem("items", JSON.stringify(e))
  setTimeout(function() {
    window.location= "cart.html"
  }, 10);
}
else{
  item_name= document.getElementById(id).value; 
  console.log(id)
  console.log(item_name)
  e.push(item_name)
  localStorage.setItem("items", JSON.stringify(e))
  setTimeout(function() {
    window.location= "cart.html"
  }, 10);
}
  
 
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show')
          entry.target.classList.remove('hidden')
      }else{
          entry.target.classList.remove('show')
          entry.target.classList.add('hidden')
      }
  });
})
const hiddenelements= document.querySelectorAll(".hidden")
hiddenelements.forEach((el) => observer.observe(el));
