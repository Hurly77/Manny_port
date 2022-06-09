function onClick(e) {
  if (e.target.innerHTML === 'In Cart') {
    alert('already In Cart');
  } else {
    e.target.innerHTML = /* HTML */ `
      <div class="flex items-center gap-2">
        Loading
        <div class="border-t-2 border-white animate-spin rounded-full h-6 w-6"></div>
      </div>
    `;
    e.target.className = 'btn btn-secondary rounded';

    setTimeout(() => {
      e.target.innerHTML = 'In Cart';
      e.target.className = 'btn btn-primary rounded';
      let cart = document.getElementById('cart-badge');
      let cartItems = document.getElementById('cart-items');

      let inCartItems = +document.getElementById('cart-items').innerHTML;
      let inCart = +document.getElementById('cart-badge').innerHTML;

      cart.innerHTML = inCart += 1;
      cartItems.innerHTML = inCartItems += 1;
    }, 2000);
  }
}

document.getElementById('clicker').addEventListener('click', onClick);
document.getElementById('clicker2').addEventListener('click', onClick);
document.getElementById('clicker3').addEventListener('click', onClick);
