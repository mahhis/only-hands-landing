import { useState } from 'preact/hooks'

export default function () {
  const [selectedSlide, setSelectedSlide] = useState(1)
  const openModal = (src: string) => {
    const elem: HTMLDialogElement = document.getElementById(
      'img_on_screen'
    ) as HTMLDialogElement

    const imgElement = elem.querySelector('img')
    if (imgElement) {
      imgElement.setAttribute('src', src)
    }

    elem.showModal()
  }

  return (
    <div>
      <dialog id="img_on_screen" className="modal">
        <div
          className="modal-box"
          style={{
            background: 0,
          }}
        >
          <img src="/img/slide1.jpg" className="w-full" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/img/slide1.webp"
            className="w-full"
            onClick={() => openModal('/img/slide1.webp')}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/img/slide2.webp"
            className="w-full"
            onClick={() => openModal('/img/slide2.webp')}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/img/slide3.webp"
            className="w-full"
            onClick={() => openModal('/img/slide3.webp')}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/img/slide4.webp"
            className="w-full"
            onClick={() => openModal('/img/slide4.webp')}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#slide1"
          className={`btn btn-xs ${selectedSlide === 1 ? 'border-white' : ''}`}
          onClick={() => setSelectedSlide(1)}
        >
          1
        </a>
        <a
          href="#slide2"
          className={`btn btn-xs ${selectedSlide === 2 ? 'border-white' : ''}`}
          onClick={() => setSelectedSlide(2)}
        >
          2
        </a>
        <a
          href="#slide3"
          className={`btn btn-xs ${selectedSlide === 3 ? 'border-white' : ''}`}
          onClick={() => setSelectedSlide(3)}
        >
          3
        </a>
        <a
          href="#slide4"
          className={`btn btn-xs ${selectedSlide === 4 ? 'border-white' : ''}`}
          onClick={() => setSelectedSlide(4)}
        >
          4
        </a>
      </div>
    </div>
  )
}
