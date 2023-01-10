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

items= JSON.parse(localStorage.getItem('items'))
console.log(items)
if (items.length > 5) {
	alert("cart is full")
}else{
	if (items.length == 1) {
		items_cart1= items[0]
		console.log(items_cart1)
	}else if (items.length == 2) {
		items_cart1= items[0]
		items_cart2= items[1]
	}else if (items.length == 3) {
		items_cart1= items[0]
		items_cart2= items[1]
		items_cart3= items[2]
	}else if (items.length == 4) {
		items_cart1= items[0]
		items_cart2= items[1]
		items_cart3= items[2]
		items_cart4= items[3]
	}else if (items.length == 5) {
		items_cart1= items[0]
		items_cart2= items[1]
		items_cart3= items[2]
		items_cart4= items[3]
		items_cart5= items[4]
	}
}
