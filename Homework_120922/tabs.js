
    let tabsWrapper = document.querySelector('.nav-tabs'); // Создаем переменные
    let tabs = tabsWrapper.querySelectorAll('.nav-item');
    let sectionsWrapper = document.querySelector('.tabs_content')
    let sections = sectionsWrapper.querySelectorAll('.section');

    tabsWrapper.addEventListener('click', selectTab); // вешаем прослушку на материнский элемент

    function selectTab(event) { // описываем функцию
        if(this !== event.target){ // условие что событие относиться к tabsWrapper
        
        tabsReset(); // функцию, которая удаляет св-во 'active' и 'show' у всех tab
        event.target.classList.add('active'); // добовляем эленту св-во 'active' на которай кликнули
        checkTabActive();
        
    }

      
    function checkTabActive() {
        for ( const tab of tabs) {// при помощи цикла перебераем все tab
            if(tab.classList.contains('active')){ // находим tab который имеет св-во 'active'
                const tabId = tab.dataset.tabid; // Получаем tabId через dataset.tabid
                showSection(tabId); // Вызываем функцию showSection, которая прокручевает section и добавляет класс 'show'
            }        
            }
        }
    }

    function tabsReset() {   // вынесли отдельно функцию, которая удаляет св-во 'active' и 'show' у всех tab
         for (let i = 0; i < tabs.length; i++) { // при помощи цикла перебераем все tab и section
             const tab = tabs[i];
             const section =sections[i];
             tab.classList.remove('active');  // удаляет св-во 'active' у всех tab
             section.classList.remove('show'); // удаляет св-во 'show' у всех  section
         }
     }

    function showSection(tabId) {  // вынесли отдельно функцию которая показывает секцию, и передаем в нее переменную tabId
        for (const section of sections) { // перебираем при помощи цикла все section
            if(section.dataset.sectionid === tabId){ // ищем section который соответствует tabId
                section.classList.add('show'); // добавляем section св-во ' 'show'
        }
        }
    }

