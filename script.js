
    var buyTickets = document.querySelectorAll('.js-buy-tickets');
    const modal = document.querySelector('.js-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalContainer = document.querySelector('.modal-container');

    function  showBuyTickets() {
        modal.classList.add('open');
    }

    function removeBuyTickets() {
        modal.classList.remove('open');
    }

    for (var buyTicket of buyTickets) {
        buyTicket.addEventListener('click', showBuyTickets);
    }

    modalClose.addEventListener('click', removeBuyTickets);

    modal.addEventListener('click', removeBuyTickets);
    
    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    })


    var header = document.querySelector('#header');
    var mobileMenu = document.querySelector('.menu-mobile-btn');
    var headerHeight = header.clientHeight;

    mobileMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = '46px';
        }
    }
