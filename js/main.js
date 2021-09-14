// появление кнопки скрола наверх при пролистывании страницы вниз

(function () {
    const buttonScrollUp = document.querySelector('.button__scroll-up');
    window.onscroll = () => {
        if (window.pageYOffset > 815) {
            buttonScrollUp.classList.remove('class_display_none')
        } else {
            buttonScrollUp.classList.add('class_display_none')
        }
    };
}());




//открытие плашки по наведению на пункт навигации header

(function () {
    const tabHeaderLink = document.querySelector('.header__link');
    const tabPlashka= document.querySelector('.plashka');
    
    tabHeaderLink.addEventListener('mouseenter', () => {
        tabPlashka.classList.remove('class_display_none');
    });

    tabPlashka.addEventListener('mouseleave', () => {
        tabPlashka.classList.add('class_display_none');
    });
}());




//чтоб было возарвщено 29к (и 30к перечеркнуто) при взятых 28к за 14 дней: проценты должны быть такие:
// 0.255% в день (со скидкой)
// 0.5102% в день (без скидок)



function addSpaces(nStr){
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
    };
    
    
    jQuery( ".loan_sum" ).slider({
                range: "min",
                value: 28000,
                min: 3000,
                max: 50000,
                step: 1000,
                animate:true,
                slide: function( event, ui ) {
            if (ui.value==3000){ jQuery( ".loan_sum_rez" ).html("<span>0</span> руб.");  }
            else jQuery( ".loan_sum_rez" ).html("<span>" + addSpaces(ui.value) + "</span> руб.");
            crachet();
            },
            stop: function( event, ui ) {
    }
    });
    
    jQuery( ".loan_term" ).slider({
                range: "min",
                value: 14,
                min: 1,
                max: 31,
                step: 1,
                animate:true,
                slide: function( event, ui ) {
            if (ui.value==1){ jQuery( ".loan_term_rez" ).html("<span>0</span> дней");  }
            else jQuery( ".loan_term_rez" ).html("<span>" + addSpaces(ui.value) + "</span> дней");
            crachet();
            },
            stop: function( event, ui ) {
    }
    }); 
    
function crachet() {
    var loan = parseInt(jQuery(".loan_sum_rez span").text().replace(/\s+/g, ""))
    var term = parseInt(jQuery(".loan_term_rez span").text().replace(/\s+/g, ""))
    var summa =  loan * (term * 0.255 + 100) / 100;
    var realySumma = loan * (term * 0.5102 + 100) / 100;
    var date = new Date();
    var month = ["Января", "Февраля", "Марта", "Апреля",
       "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]; 
    
    //поле "Вы берете"
    jQuery(".summary-information__loan").html("<span>" + addSpaces(loan) + "</span> руб.");
    //поле "Вы возвращаете"
    jQuery(".summary-information__repayment").html("<span>" + addSpaces(Math.round(summa)) + "</span> руб.");
    jQuery(".realy-repayment").html("<span>" + addSpaces(Math.round(realySumma)) + "</span> руб.");
   
    //вычисление дня возврата займа
    date.setDate(date.getDate() + term);
    //формируем текст сообщения для поля "День возврата"
    var Msg = date.getDate() + ' ' + month[date.getMonth()]  + ' ' + date.getFullYear();
    //поле "День возврата"
    jQuery(".summary-information__term").html("<span>" + Msg + "</span>");
    
    }
   
//перещелкивание tab-ов "получение" и "погашение" займа 
(function () {
        const tabRepayment = document.querySelector('.tab-repayment');
        const tabGetting = document.querySelector('.tab-getting');
        const stepsGetting = document.querySelector('.credit-process__steps-getting')
        const stepsRepayment = document.querySelector('.credit-process__steps-repayment')
    
        tabRepayment.addEventListener('click', () => {
            tabRepayment.classList.add('class_for_repayment');
            tabRepayment.classList.remove('tab-repayment');
            tabGetting.classList.add('class_for_getting');
            tabGetting.classList.remove('tab-getting');
            stepsGetting.classList.add('class_display_none')
            stepsRepayment.classList.remove('class_display_none')
        });

        tabGetting.addEventListener('click', () => {
            tabRepayment.classList.add('tab-repayment');
            tabRepayment.classList.remove('class_for_repayment');
            tabGetting.classList.add('tab-getting');
            tabGetting.classList.remove('class_for_getting');
            stepsGetting.classList.remove('class_display_none')
            stepsRepayment.classList.add('class_display_none')
        });
    }());
 
//открытие-закрытие "часто задаваемых вопросов"
//чую, есть решение намного элегантнее

(function () {
    const tabQuestion_1 = document.getElementById('1');
    const tabQuestion_11 = document.getElementById('11');
    const tabQuestion_2 = document.getElementById('2');
    const tabQuestion_22 = document.getElementById('22');
    const tabQuestion_3 = document.getElementById('3');
    const tabQuestion_33 = document.getElementById('33');
    const tabQuestion_4 = document.getElementById('4');
    const tabQuestion_44 = document.getElementById('44');

    // первый вопрос
    tabQuestion_1.addEventListener('click', () => {
        tabQuestion_1.classList.add('class_display_none');
        tabQuestion_11.classList.remove('class_display_none');
    });

    tabQuestion_11.addEventListener('click', () => {
        tabQuestion_11.classList.add('class_display_none');
        tabQuestion_1.classList.remove('class_display_none');
    });

   // второй вопрос

    tabQuestion_2.addEventListener('click', () => {
        tabQuestion_2.classList.add('class_display_none');
        tabQuestion_22.classList.remove('class_display_none');
    });

    tabQuestion_22.addEventListener('click', () => {
        tabQuestion_22.classList.add('class_display_none');
        tabQuestion_2.classList.remove('class_display_none');
    });

    // третий вопрос

    tabQuestion_3.addEventListener('click', () => {
        tabQuestion_3.classList.add('class_display_none');
        tabQuestion_33.classList.remove('class_display_none');
    });

    tabQuestion_33.addEventListener('click', () => {
        tabQuestion_33.classList.add('class_display_none');
        tabQuestion_3.classList.remove('class_display_none');
    });

    // четвертый вопрос

    tabQuestion_4.addEventListener('click', () => {
        tabQuestion_4.classList.add('class_display_none');
        tabQuestion_44.classList.remove('class_display_none');
    });

    tabQuestion_44.addEventListener('click', () => {
        tabQuestion_44.classList.add('class_display_none');
        tabQuestion_4.classList.remove('class_display_none');
    });
}());


