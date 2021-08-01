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
        }
    }
})