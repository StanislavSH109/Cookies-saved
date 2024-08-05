const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
   };

const code = promocodeObj['promocode'];

const newAlert = document.querySelector('.content__text');


const getCookie = () => {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [key, value] = item.split('=')
        acc[decodeURIComponent(key)] = decodeURIComponent(value);

        return acc;
    }, {})
};



const result = getCookie();
const cookieValue = Object.values(result)

if (cookieValue.find((item) => item === 'PROM50')) {
    newAlert.textContent = 'Промокод применен. Скидка 50%';
}


const fromElement = document.querySelector('.form');

fromElement.addEventListener('submit', function (evt) {
    const dataForm = new FormData(fromElement);
    
    dataForm.forEach(function(key, value) {
        const arrayPromo = Object.values(promocodeObj);
      
        if (key === arrayPromo.find(item => item == key)) {
            evt.preventDefault();
            newAlert.textContent = 'Промокод применен. Скидка 50%';
            document.cookie = `promo_code=${code}`;
        }
    });
});




