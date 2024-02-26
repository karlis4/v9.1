/*const goods = document.querySelector('button[data-id = "goods"]');
const cart = document.querySelector('button[data-id="cart"]');

//console.log(goods, cart);

function clickHandler(event) {
    // event.target.dataset.id
    // event.target.getAttribute('data-id')
    //console.log(event.target.getAttribute('data-id'));

    //console.log(id);

    //return (event) => {
    //    console.log(event);
    //}

    /*const id = event.target.dataset.id;

    if (id === 'goods') {
        goods.classList.add('active');
        cart.classList.remove('active');
    }
    else if (id === 'cart') {
        goods.classList.remove('active');
        cart.classList.add('active');
    }*/

    /*goods.classList.toggle('active');
    cart.classList.toggle('active');


}


goods.addEventListener('click', clickHandler);
cart.addEventListener('click', clickHandler);*/





// -------------------------------------------------------------------------------

let activeTabId = 'cart';

const goodsInCart = [];

const initialTab = getActiveTab();

initialTab.classList.add('active');

renderTabContentById(activeTabId);


// ---



const tabWithCounter = document.querySelector(
	'button[data-goods-count]'
);

const tabs = document.querySelectorAll('button.tab');
addClickListeners(tabs, clickHandler);

// ---

function clickHandler(event) {
	const activeTab = getActiveTab();	

	activeTab.classList.remove('active');
	event.target.classList.add('active');

	activeTabId = event.target.dataset.tabId;

	removeActiveTabContent();
	renderTabContentById(activeTabId);
}

function addInCartHandler(product) {
	return () => {
		goodsInCart.push(product);

		console.log(goodsInCart);

		tabWithCounter.dataset.goodsCount = goodsInCart.length;
	};
}

function addClickListeners(elements, callback) {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];

		element.addEventListener('click', callback);
	}
}

function createProduct(product) {
	return {
		name: product.name ? product.name : 'Имя неизвестно',
		price: product.price ? product.price : null,
		imgSrc: product.imgSrc ? product.imgSrc : 'goods/default.png',
	};
}

function getActiveTab() {
	return document.querySelector(
		`button[data-tab-id="${activeTabId}"]`
	);
}

function removeActiveTabContent() {
	const activeContent = document.querySelector(
		`[data-active-tab-content="true"]`
	);

	activeContent.remove();
}

function renderTabContentById(tabId) {
	const tabsContainer = document.querySelector('.tabs');
	let html = null;

	if (tabId === 'goods') {
		const html = renderGoods();
		
	}
	else {
		const html = renderCart();
	}	

	if (html !== null){
		tabsContainer.after(html);
	}
}

function renderGoods() {
	const div = document.createElement('div');
	div.dataset.activeTabContent = 'true';
	div.className = 'product-items';

	for (let i = 0; i < GOODS.length; i++) {
		const product = createProduct(GOODS[i]);

		const clickHander = addInCartHandler(product);

		const button = document.createElement('button');
		button.className = 'button';
		button.textContent = 'В корзину';
		button.addEventListener('click', clickHander);

		const price = product.price === null
			? '<p>Товар закончился</p>'
			: `<p class="price">₽ ${product.price}</p>`;

		const productBlock = document.createElement('div');
		productBlock.className = 'product-item';
		productBlock.innerHTML = `
			<img src="${product.imgSrc}">
			<div class="product-list">
		    	<h3>${product.name}</h3>
		    	${price}
			</div>
		`;

		productBlock.querySelector('.product-list').append(button);
		div.append(productBlock);
	}

	return div;
}

function renderCart() {
	const container = document.createElement('div');
	container.dataset.activeTabContent = 'true';
	container.className = 'cart-items';

	for (let i = 0; i < goodsInCart.length; i++) {
		const product = goodsInCart[i];

		const cartItem = document.createElement('div');
		cartItem.className = 'cart-item';
		cartItem.innerHTML = `
		<div class="cart-item-title">Уроки по HTML</div>
		<div class="cart-item-count">3шт.</div>
		<div class="cart-item-price">₽ 150</div>
		`;
	}

	return container;
	
	/*return `
			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по HTML</div>
	  			<div class="cart-item-count">3шт.</div>
	  			<div class="cart-item-price">₽ 150</div>
				<button class="cart-item-delete">x</button>
			</div>

			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по CSS</div>
	  			<div class="cart-item-count">1шт.</div>
	  			<div class="cart-item-price">₽ 450</div>
				  <button class="cart-item-delete">x</button>
			</div>

			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по JS</div>
	  			<div class="cart-item-count">6шт.</div>
	  			<div class="cart-item-price">₽ 550</div>
				<button class="cart-item-delete">x</button>
			</div>
		</div>
	`;*/
}






