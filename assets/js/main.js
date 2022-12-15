const advantagesList = [
    {
        title: 'Автодозвон',
        titleClass: '',
        text: 'Тебе больше не нужно сидеть в ожидании пока появится номер, нажал на кнопку <strong>«Автодозвон»</strong>и занимаешься своими делами. (Работает только на ноутбуке или компьютере)',
        imgUrl: 'assets/images/advantages/hands.svg"',
        class:'ItemAdvantages_DecorRed'
    },
    {
        title: 'Привяжем номер',
        titleClass: 'ItemAdvantages-Title_Free',
        text: 'телефона с которого будешь звонить! <strong>Бесплатные звонки</strong> на номера авито<strong>без блокировки!</strong>Больше не нужно менять симку!',
        imgUrl: 'assets/images/advantages/mail.svg"',
        class:''
    },
    {
        title: 'Установим телефонию',
        titleClass: '',
        text: 'Если ты хочешь звонить с компьютера через интернет, то мы поможем это сделать! Звонки через интернет проходят <strong>быстрее чем обычные</strong>, к тому же, <strong>они в разы дешевле!</strong>Будь на шаг впереди!',
        imgUrl: 'assets/images/advantages/support.svg"',
        class:'ItemAdvantages_DecorBlue'
    },
    {
        title: 'Выделение цветом',
        titleClass: '',
        text: 'Можешь <strong>выделять цветом</strong> объявления, одно нажатие - синий, два нажатия - красный. Помогает не путаться в информации и не терять концентрацию!',
        imgUrl: 'assets/images/advantages/color.svg"',
        class:'ItemAdvantages_DecorLine'
    },
    {
        title: 'Фильтры',
        titleClass: '',
        text: 'Можно выбрать параметры, цену или просмотры, и отобразить в программе только нужные тебе объявления! А так же много других <strong>функций</strong>, которые помогут тебе в работе!',
        imgUrl: 'assets/images/advantages/filters.svg"',
        class:'ItemAdvantages_DecorPurpleGreen'
    }
]
const advantagesItem = document.querySelector('.Advantages-List')
advantagesItem.innerHTML = advantagesList.map(
    item=>(
        `<li class="Advantages-Item ItemAdvantages ${item.class}">
                            <div class="ItemAdvantages-Info">
                                <h3 class="ItemAdvantages-Title ${item.titleClass}">${item.title}</h3>
                                ${item.class === 'ItemAdvantages_DecorRed' ? '<h4 class="ItemAdvantages-SubTitle">входит в стоимость подписки!</h4>' : ''}
                                <p class="ItemAdvantages-Text">${item.text}</p>
                            </div>
                            <div class="ItemAdvantages-ImgWrapper">
                                <img class="ItemAdvantages-Img" src="${item.imgUrl}" alt="Автодозвон">
                            </div>
                        </li>`
    )
)
    .join('')