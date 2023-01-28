document.addEventListener('DOMContentLoaded', () => {
       
    const kitchen =  [{
        name: "Кухня Nicole",
        img: "./image/kitchen/nicole.jpg",
        price: 159648,
        counter: 0,
        number: 0
    },
    {
        name: "Кухня Teramo",
        img: "./image/kitchen/teramo.jpg",
        price: 158122,
        counter: 0,
        number: 1
    },
    {
        name: "Кухня Spark",
        img: "./image/kitchen/spark.jpg",
        price: 184450,
        counter: 0,
        number: 2
    }];

    const shkaf = [
        {
            name: "Распашной шкаф Mixal",
            img: "./image/shkaf/mix.jpg",
            price: 245250,
            counter: 0,
            number: 0
        },
        {
            name: "Распашной шкаф Vector",
            img: "./image/shkaf/vector.jpg",
            price: 107955,
            counter: 0,
            number: 1
        },
        {
            name: "Распашной шкаф Mix 22",
            img: "./image/shkaf/mix.jpg",
            price: 73927,
            counter: 0,
            number: 2
        }];

    const bathroom = [
        {
            name: "Ванная Spark",
            img: "./image/bathroom/spark.jpg",
            price: 28400,
            counter: 0,
            number: 0
        },
        {
            name: "Ванная Vector",
            img: "./image/bathroom/vector.jpg",
            price: 24100,
            counter: 0,
            number: 1
        },
        {
            name: "Ванная Nicole",
            img: "./image/bathroom/nicole.jpg",
            price: 24100,
            counter: 0,
            number: 2
        }
    ];
function render() {


    let cart =[];

    const pole = document.querySelectorAll(".cell_towars_categories"),
          script = document.querySelector(".script")

    pole.forEach( e => {
        e.addEventListener('click', event => {
            if(event.currentTarget.dataset.cat == "kitchen") {
                script.innerHTML = ``;
                kitchen.forEach(e => {
                    script.innerHTML += `
                    <div class="col-md-4 col-sm-12">
                        <div class="cell_towars_categories_two" data-cat="${e.name}">
                            <img src="${e.img}" alt="картинка" class="img-fluid">
                            <div class="h5 mt-3 cell_towars_categories_name">${e.name}</div>
                            <div class="h5 mt-3 cell_towars_categories_name">${e.price} &#8381;</div>
                            <button class="in_cart" data-cart="${e.number}">В корзину</button>
                        </div>
                    </div>
                    `;
                });
                let button = document.querySelectorAll('.in_cart');
                    button.forEach( e => {
                        e.addEventListener('click', event => {
                            let sel = event.currentTarget.dataset.cart;
                            cart.push(kitchen[sel]);
                            console.log(cart);
                        });
                    });
            };
            if(event.currentTarget.dataset.cat == "shkaf") {
                script.innerHTML = ``;
                shkaf.forEach(e => {
                    script.innerHTML += `
                    <div class="col-md-4 col-sm-12">
                        <div class="cell_towars_categories_two" data-cat="${e.name}">
                            <img src="${e.img}" alt="картинка" class="img-fluid">
                            <div class="h5 mt-3 cell_towars_categories_name">${e.name}</div>
                            <div class="h5 mt-3 cell_towars_categories_name">${e.price} &#8381;</div>
                            <button class="in_cart" data-cart="${e.number}">В корзину</button>
                        </div>
                    </div>
                    `;
                });
                let button = document.querySelectorAll('.in_cart');
                    button.forEach( e => {
                        e.addEventListener('click', event => {
                            let sel = event.currentTarget.dataset.cart;
                            cart.push(shkaf[sel]);
                            console.log(cart);
                        });
                    });
            };
            if(event.currentTarget.dataset.cat == "bathroom") {
                script.innerHTML = ``;
                bathroom.forEach(e => {
                    script.innerHTML += `
                    <div class="col-md-4 col-sm-12">
                        <div class="cell_towars_categories_two" data-cat="${e.name}">
                            <img src="${e.img}" alt="картинка" class="img-fluid">
                            <div class="h5 mt-3 cell_towars_categories_name">${e.name}</div>
                            <div class="h5 mt-3 cell_towars_categories_name">${e.price} &#8381;</div>
                            <button class="in_cart" data-cart="${e.number}">В корзину</button>
                        </div>
                    </div>
                    `;
                });
                let button = document.querySelectorAll('.in_cart');
                    button.forEach( e => {
                        e.addEventListener('click', event => {
                            let sel = event.currentTarget.dataset.cart;
                            cart.push(bathroom[sel]);
                            console.log(cart);
                        });
                    });
            };
        });
    });
    document.querySelector('.cart').addEventListener('click', () => {
        let result = 0;
        document.querySelector('.cart').style.display = 'none';
        document.querySelector('.complete').style.display = 'block';
        script.innerHTML = '';
        let unique = cart.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });
        cart.forEach(e => {
            script.innerHTML += `
                <div class="col-md-4 col-sm-12">
                    <div class="cell_towars_categories_two" data-cat="${e.name}">
                        <img src="${e.img}" alt="картинка" class="img-fluid">
                        <div class="h5 mt-3 cell_towars_categories_name">${e.name}</div>
                        <div class="h5 mt-3 cell_towars_categories_name">${e.price} &#8381;</div>
                    </div>
                </div>`;
            result += e.price;
            console.log(result);
        })
        script.innerHTML += `
            <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="">

        <div class="row">
          <div class="col-50">
            <h3>Платежный адрес</h3>
            <label for="fname"><i class="fa fa-user"></i>Имя</label>
            <input type="text" id="fname" name="firstname" placeholder="Щипунов Андрей Леонидович">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="and-shhipunov@mail.ru">
            <label for="adr"><i class="fa fa-address-card-o"></i>Адрес</label>
            <input type="text" id="adr" name="address" placeholder="Томская 44-39">
            <label for="city"><i class="fa fa-institution"></i>Город</label>
            <input type="text" id="city" name="city" placeholder="Пермь">

            <div class="row">
              <div class="col-50">
                <label for="state">Государство</label>
                <input type="text" id="state" name="state" placeholder="Россия">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001">
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Платеж</h3>
            <label for="fname">Допустимые карты</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <label for="cname">Имя на карте</label>
            <input type="text" id="cname" name="cardname" placeholder="Щипунов Андрей Леонидович">
            <label for="ccnum">Номер кредитной карты</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Годен месяц</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="Сентябрь">

            <div class="row">
              <div class="col-50">
                <label for="expyear">Годен год</label>
                <input type="text" id="expyear" name="expyear" placeholder="2021">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352">
              </div>
            </div>
          </div>

        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Адрес дставки совпадает с платежным адресом
        </label>
        <input type="submit" value="Подтвердить" class="btn">
      </form>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Корзина
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <hr>
      <p>Всего <span class="price" style="color:black"><b>${result}&#8381;</b></span></p>
    </div>
  </div>
</div>`;
        
    });
    document.querySelector('.complete').addEventListener('click', () => {
        document.querySelector('.cart').style.display = 'block';
        script.innerHTML = '';
        script.innerHTML += `
        <div class="col-md-4 col-sm-12">
        <div class="cell_towars_categories" data-cat="kitchen">
            <img src="./image/kitchen.jpg" alt="картинка" class="img-fluid">
            <div class="h5 mt-3 cell_towars_categories_name">Кухни</div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="cell_towars_categories" data-cat="shkaf">
            <img src="./image/shkaf.jpg" alt="картинка" class="img-fluid">
            <div class="h5 mt-3 cell_towars_categories_name">Шкафы</div>
        </div>
    </div>
    <div class="col-md-4 col-sm-12">
        <div class="cell_towars_categories" data-cat="bathroom">
            <img src="./image/bathroom.jpg" alt="картинка" class="img-fluid">
            <div class="h5 mt-3 cell_towars_categories_name">Ванные</div>
        </div>
    </div>
        `;
    render();
    }); 
}
render();

});