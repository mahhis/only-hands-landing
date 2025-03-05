import { Suspense } from 'preact/compat'
import BuyButton from 'components/BuyButton'
import Carusel from 'components/Carousel'
import MainPhraseImg from '/img/oh.webp'
import Question from 'components/Question'
import TextSJ from 'components/TextSJ'
import TextWhatIs from 'components/TextWhatIs'

export default function () {
  return (
    <div className="container mx-auto w-full p-5 prose">
      <img src={MainPhraseImg} style={{ width: 'auto', marginBottom: 0 }} />
      <Suspense fallback={<p>Loading...</p>}>
        <BuyButton />
        <Carusel />
        <TextSJ />
        <TextWhatIs />
        <div className=" p-2">
          <BuyButton />
        </div>
        <Question />
      </Suspense>
    </div>
  )
}
