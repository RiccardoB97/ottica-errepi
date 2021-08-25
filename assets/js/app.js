const app = new Vue({
    el: '#app',
    data: {
        window: {
            width: 0,
            height: 0
        },
        jumbo: [
            "./assets/img/00-Header/header-image-01.png", "./assets/img/00-Header/header-img-02.png", "./assets/img/00-Header/header-img-03.png", "./assets/img/00-Header/header-img-04.png"
        ],
        whyUs: [
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-01.png',
                'paragraph': 'Effettuiamo un controllo computerizzato della vista e ci avvaliamo di attrezzature tecnologicamente all’avanguardia per trovare la diottria ottimale.',
                'text': 'ESAME OPTOMETRICO',
                showP: false,
            },
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-02.png',
                'paragraph': "Vi proponiamo montature classiche e di tendenza con lenti di qualità top personalizzate e occhiali da sole per ogni esigenza: polarizzati, antiriflesso, per la guida e per lo sport.",
                'text': 'OCCHIALI VISTA & SOLE',
                showP: false,
            },
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-03.png',
                'paragraph': "Lenti a contatto delle migliori marche a seconda del difetto visivo per restare in contatto con il tuo mondo senza occhiali.",
                'text': 'LENTI A CONTATTO',
                showP: false,
            }
        ],
        images: ['./assets/img/04-perchè-scegliere-noi/imm-lab-01.png', './assets/img/04-perchè-scegliere-noi/imm-lab-02.png', './assets/img/04-perchè-scegliere-noi/imm-lab-03.png'],
        jumboCounter: 0,
        counter: 0,
        position: '',
        showMenu: false,
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        showNext() {
            // Shows next picture
            if (this.counter === this.images.length - 1) {
                return this.counter = 0, this.position = 'first ';
            } else if (this.counter === this.images.length - 2) {
                return this.counter += 1, this.position = 'last ';
            }
            return this.counter += 1, this.position = '';
        },
        showPrev() {
            // Shows previous picture
            if (this.counter === 0) {
                return this.counter = this.images.length - 1, this.position = 'last ';
            } else if (this.counter === 1) {
                return this.counter -= 1, this.position = 'first ';
            }
            return this.counter -= 1, this.position = ' first ';
        },
        showNextJumbo() {
            // Shows next picture
            if (this.jumboCounter === this.jumbo.length - 1) {
                return this.jumboCounter = 0, this.position = 'first ';
            } else if (this.jumboCounter === this.jumbo.length - 2) {
                return this.jumboCounter += 1, this.position = 'last ';
            }
            return this.jumboCounter += 1, this.position = '';
        },
        showPrevJumbo() {
            // Shows previous picture
            if (this.jumboCounter === 0) {
                return this.jumboCounter = this.jumbo.length - 1, this.position = 'last ';
            } else if (this.jumboCounter === 1) {
                return this.jumboCounter -= 1, this.position = 'first ';
            }
            return this.jumboCounter -= 1, this.position = ' first ';
        },
        show() {
            if (this.showMenu === false) {
                return this.showMenu = true;
            }
            else
                return this.showMenu = false;
        },
        showText(index) {
            if (this.whyUs[index].showP === false) {
                return this.whyUs.forEach(item => {
                    item.showP = false;
                }), this.whyUs[index].showP = true;
            }
            else if (this.whyUs[index].showP === true) {
                return this.whyUs[index].showP = false;
            }
        },
        showTextPhone(counter) {
            if (this.whyUs[counter].showP === true) {
                return this.whyUs[counter].showP = false;
            }
            else if (this.whyUs[counter].showP === false) {
                return this.whyUs[counter].showP = true;
            }
        },

    }
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    },
    followFinger: false,
    noSwiping: true,

});