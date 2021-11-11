function navbar() {
  return ` 
      <div id="navbar_part1"></div>
      <div id="nav_items">
        <div class="d1">
          <!-- logo -->
          <div class="box">
            <div>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.BnbXcHond7Yj-khtYhEHQQHaHa&pid=Api&P=0&w=30&h=30"
              />
            </div>
            <div class="txt">overstock</div>
            <span>&#174;</span>
          </div>
        </div>
        <div class="d2">
          <input type="text" id="input" />
          <div id="search">
            <img
              src="https://img.icons8.com/material-outlined/30/ffffff/search--v1.png"
            />
          </div>
        </div>
        <div class="d3">
          <div>
            <img
              style="margin-left: 2px"
              src="https://img.icons8.com/windows/25/000000/guest-male--v1.png"
            />
            <div onclick="acounts_dropdown()">accounts</div>
          </div>
          <div class="hello">
            <img src="https://img.icons8.com/ios/25/000000/like--v1.png" />
            <div >Lists</div>
          </div>
          <div>
            <img
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/25/000000/external-cart-supermarket-flatart-icons-solid-flatarticons.png"
            />
            <div><a href="cart.html">Cart</a></div>
          </div>
          <!-- <button>
            <img src="https://img.icons8.com/ios/15/000000/lock--v1.png" />Add
            To Cart
          </button> -->
        </div>
      </div>

      <div id="categories">
        <div>Furniture</div>
        <div>Rugs</div>
        <div>Decor</div>
        <div>Bed&Bath</div>
        <div>Home Improvement</div>
        <div>Kitchen</div>
        <div>Outdoor</div>
        <div onmouseover="jwellery_items()">
          Jewellery
          <div class="jwellery_category"></div>
        </div>
        <div>Lighting</div>
        <div>Kids & Baby</div>
        <div>More</div>
        <div id="vertical"></div>
        <div>Holidays & Gifts</div>
        <div style="color: #d23141">Sales & Gifts</div>
      </div>
   `;
}
function savelater() {
  window.location.href = "saveLater.html";
}
export { navbar, savelater };
