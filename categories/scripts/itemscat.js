async function getdata(url, cont) {
  try {
    var res = await fetch(url);
    var data = await res.json();
    data.forEach((d) => {
      //   let items = document.querySelector(".items");
      let item = document.createElement("div");
      let item_div = document.createElement("div");
      item.className = "item";
      let image1 = document.createElement("img");
      image1.src = d.image;
      let name = document.createElement("p");
      name.innerText = d.dec;
      let price = document.createElement("p");
      price.innerText = d.prize;
      item_div.append(name, price);
      item_div.style.width = "300px";
      item_div.style.height = "70px";
      item_div.style.textAlign = "center";
      item_div.style.border = ".1px solid grey";
      item.append(image1, item_div);
      item.addEventListener("click", () => {
        if (localStorage.getItem("items_buy") === null) {
          localStorage.setItem("items_buy", JSON.stringify([]));
        } else {
          cart(d);
        }
      });
      cont.append(item);
    });
  } catch (err) {
    console.log(err);
  }
}

if (localStorage.getItem("items_buy") === null) {
  localStorage.setItem("items_buy", JSON.stringify([]));
}

function cart(d) {
  var cartData = JSON.parse(localStorage.getItem("items_buy"));

  var flag = true;
  for (let k = 0; k < cartData.length; k++) {
    if (d.id === cartData[k].id) {
      flag = false;
      break;
    }
  }

  if (flag) {
    cartData.push(d);
  }

  localStorage.setItem("items_buy", JSON.stringify(cartData));
}
export default getdata;
