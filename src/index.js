import './styles.css';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',];

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]')
}

const variousColor = {
    isActive: false,

    start() {
        if (this.isActive) { return }
        this.isActive = true
        this.intervalId = setInterval(
            arr => {
                const randomIntegerFromInterval = (min = 0, max = arr.length - 1) => {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
                refs.body.style.backgroundColor = arr[randomIntegerFromInterval()]
            }, 1000, colors,
        )
    },

    stop() {
        clearInterval(this.intervalId)
        this.isActive = false
    }
}

refs.btnStart.addEventListener('click', variousColor.start.bind(variousColor))
refs.btnStop.addEventListener('click', variousColor.stop.bind(variousColor))