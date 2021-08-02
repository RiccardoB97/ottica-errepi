const app = new Vue({
    el: '#app',
    data: {
        window: {
            width: 0,
            height: 0
        },
        whyUs: [
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-01.png',
                'text': 'Esami della vista'
            },
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-02.png',
                'text': 'I migliori accessori'
            },
            {
                'image': './assets/img/04-perchè-scegliere-noi/imm-lab-03.png',
                'text': 'Articoli specifici'
            }
        ],
        images: ['./assets/img/04-perchè-scegliere-noi/imm-lab-01.png', './assets/img/04-perchè-scegliere-noi/imm-lab-02.png', './assets/img/04-perchè-scegliere-noi/imm-lab-03.png'],
        counter: 0,
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
    }
})