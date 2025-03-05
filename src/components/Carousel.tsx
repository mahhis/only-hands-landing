import Slide1Img from '/img/slide1.webp'
import Slide2Img from '/img/slide2.webp'
import Slide3Img from '/img/slide3.webp'
import Slide4Img from '/img/slide4.webp'

export default function () {
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
          <img src={Slide1Img} className="w-full" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={Slide1Img}
            className="w-full"
            onClick={() => openModal(Slide1Img)}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={Slide2Img}
            className="w-full"
            onClick={() => openModal(Slide2Img)}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={Slide3Img}
            className="w-full"
            onClick={() => openModal(Slide3Img)}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={Slide4Img}
            className="w-full"
            onClick={() => openModal(Slide4Img)}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className={`btn btn-xs `}>
          1
        </a>
        <a href="#slide2" className={`btn btn-xs`}>
          2
        </a>
        <a href="#slide3" className={`btn btn-xs `}>
          3
        </a>
        <a href="#slide4" className={`btn btn-xs `}>
          4
        </a>
      </div>
    </div>
  )
}
