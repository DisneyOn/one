const slides = document.querySelectorAll(".slide")

let index = 0
let autoSlide

function update() {

    slides.forEach(slide => {
        slide.classList.remove(
            "center",
            "left",
            "right",
            "far-left",
            "far-right",
            "hidden"
        )
    })

    let prev = (index - 1 + slides.length) % slides.length
    let next = (index + 1) % slides.length

    let farPrev = (index - 2 + slides.length) % slides.length
    let farNext = (index + 2) % slides.length

    slides[index].classList.add("center")
    slides[prev].classList.add("left")
    slides[next].classList.add("right")

    slides[farPrev].classList.add("far-left")
    slides[farNext].classList.add("far-right")

    slides.forEach((slide, i) => {
        if (
            i !== index &&
            i !== prev &&
            i !== next &&
            i !== farPrev &&
            i !== farNext
        ) {
            slide.classList.add("hidden")
        }
    })

}

function nextSlide() {
    index++
    if (index >= slides.length) index = 0
    update()
    resetAuto()
}

function prevSlide() {
    index--
    if (index < 0) index = slides.length - 1
    update()
    resetAuto()
}

function startAuto() {
    autoSlide = setInterval(nextSlide, 4000)
}

function resetAuto() {
    clearInterval(autoSlide)
    startAuto()
}

document.querySelector(".next").onclick = nextSlide
document.querySelector(".prev").onclick = prevSlide

startAuto()
update()

const track = document.querySelector(".popular-track")

track.innerHTML += track.innerHTML



const fireContainer = document.querySelector(".fire")

function createFire() {
    for (let i = 0; i < 35; i++) {
        const flame = document.createElement("div")
        flame.classList.add("flame")

        flame.style.left = Math.random() * 100 + "vw"
        flame.style.animationDuration = (Math.random() * 4 + 3) + "s"
        flame.style.animationDelay = Math.random() * 3 + "s"

        fireContainer.appendChild(flame)
    }
}

createFire()


