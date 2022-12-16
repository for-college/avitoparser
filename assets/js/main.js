const advantagesList = [
    {
        title: 'Автодозвон',
        titleClass: '',
        text: 'Тебе больше не нужно сидеть в ожидании пока появится номер, нажал на кнопку <strong>«Автодозвон»</strong>и занимаешься своими делами. (Работает только на ноутбуке или компьютере)',
        imgUrl: 'assets/images/advantages/hands.svg"',
        class:'item-advantages_decor_red'
    },
    {
        title: 'Привяжем номер',
        titleClass: 'item-advantages__title_free',
        text: 'телефона с которого будешь звонить! <strong>Бесплатные звонки</strong> на номера авито<strong>без блокировки!</strong>Больше не нужно менять симку!',
        imgUrl: 'assets/images/advantages/mail.svg"',
        class:''
    },
    {
        title: 'Установим телефонию',
        titleClass: '',
        text: 'Если ты хочешь звонить с компьютера через интернет, то мы поможем это сделать! Звонки через интернет проходят <strong>быстрее чем обычные</strong>, к тому же, <strong>они в разы дешевле!</strong>Будь на шаг впереди!',
        imgUrl: 'assets/images/advantages/support.svg"',
        class:'item-advantages_decor_blue'
    },
    {
        title: 'Выделение цветом',
        titleClass: '',
        text: 'Можешь <strong>выделять цветом</strong> объявления, одно нажатие - синий, два нажатия - красный. Помогает не путаться в информации и не терять концентрацию!',
        imgUrl: 'assets/images/advantages/color.svg"',
        class:'item-advantages_decor_line'
    },
    {
        title: 'Фильтры',
        titleClass: '',
        text: 'Можно выбрать параметры, цену или просмотры, и отобразить в программе только нужные тебе объявления! А так же много других <strong>функций</strong>, которые помогут тебе в работе!',
        imgUrl: 'assets/images/advantages/filters.svg"',
        class:'item-advantages_decor_purple-green'
    }
]
const advantagesItem = document.querySelector('.advantages__list')
advantagesItem.innerHTML = advantagesList.map(
    item=>(
        `<li class="advantages__item item-advantages ${item.class}">
                            <div class="item-advantages__Info">
                                <h3 class="item-advantages__title ${item.titleClass}">${item.title}</h3>
                                ${item.class === 'item-advantages_decor_red' ? '<h4 class="item-advantages__sub-title">входит в стоимость подписки!</h4>' : ''}
                                <p class="item-advantages__text">${item.text}</p>
                            </div>
                            <div class="item-advantages__img-wrapper">
                                <img class="item-advantages__img" src="${item.imgUrl}" alt="Автодозвон">
                            </div>
                        </li>`
    )
)
    .join('')
