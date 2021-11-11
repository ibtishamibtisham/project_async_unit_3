function selectDropDown() {
  var select = document.querySelectorAll("select");
  for (let i = 0; i < select.length; i++) {
    select[i].onchange = () => {
      var x = document.getElementById(`selectme${i + 1}`);
      var prize = document.getElementById(`prize${i + 1}`);
      //count
      count_prod[i] = Number(x.value);

      prize.textContent = `INR ${Number(x.value) * prizeArr[i]}`;
      arr1[i] = prize.textContent.split(" ")[1];
      let sum = 0;
      for (let i = 0; i < count_prod.length; i++) {
        sum += count_prod[i];
      }
      let count2 = document.querySelector(".count1");
      count2.innerText = `${sum} Items`;

      //prizde
      let prize_show = document.querySelector(".price_on");

      let sum1 = 0;
      for (let i = 0; i < arr1.length; i++) {
        sum1 += Number(arr1[i]);
      }

      prize_show.innerText = `INR ${sum1.toFixed(3)}`;
    };
  }
}
function item_count() {
  let prize_show = document.querySelector(".price_on");
  //prizde
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += Number(arr1[i]);
  }
  prize_show.textContent = `INR ${sum1.toFixed(2)}`;
  //count
  let sum = 0;
  for (let i = 0; i < count_prod.length; i++) {
    sum += count_prod[i];
  }

  let count2 = document.querySelector(".count1");
  count2.innerText = `${sum} Items`;
}

export { selectDropDown, item_count };
