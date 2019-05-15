var modal = (function () {
    var modal = document.querySelector('.modal');
    var modalBody = modal.querySelector('.modal__body');
    var showSearch = function() {
        document.querySelector('.search__list').classList.add('active')
    }
    var closeSearch = function() {
        document.querySelector('.search__list').classList.remove('active')
    }


    var show = function () {
        modal.classList.add('active');
        document.body.classList.add('modal-active');
    }

    var close = function () {
        modal.classList.remove('active')
        document.body.classList.remove('modal-active')
    }

    document.body.addEventListener('click', function (e) {
        e.preventDefault();
        if(!e.target.closest('.modal-link')) return;
        var url = e.target.getAttribute('data-link');
        //getTemplate(url);
        show();
    })

    document.body.addEventListener('click', function (e) {
        if(e.target.closest('.modal__close') ||
            e.target.closest('.modal__overlay')) {
            close();
        }
    })

    /*document.querySelector('.search__input').addEventListener('focus', function (e) {
        if(!e.target.closest('.search__input')) return;
        showSearch()
    })
    document.querySelector('.search__input').addEventListener('blur', function (e) {
        if(!e.target.closest('.search__input')) return;
        closeSearch()
    })*/




    var getTemplate = function (url) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET',url, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState != 4) return;

            if(xhr.status == 200) {
                modalBody.innerHTML = xhr.responseText ;
                //console.log()
            }
        }

    }

    return {}
}) ()

