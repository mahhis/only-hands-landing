import { Link } from 'preact-router'
import { useAtom } from 'jotai'
import ChoiceImg from '/img/choice.webp'
import Question from 'components/Question'
import payNow from 'atoms/payNow'

export default function () {
  const [, setPayNow] = useAtom(payNow)
  return (
    <div className="container mx-auto  prose w-full">
      <div className="card w-full">
        <div className="card-body w-full">
          <h2>
            We are currently creating a legal entity and until it is created we
            can only accept payments manually.
          </h2>
          <h2>
            By selecting the <span className="text-red-500">red button</span>,
            we will contact you within 24 hours using the contact info you leave
            on the next page and find a way to pay, then the price for you will
            be <span className="text-red-500">$149</span>.
          </h2>
          <h2>
            But if you want to pay using standard methods, as soon as we have a
            legal entity, we will send a link to payment using the information
            you provided, but the price will already be{' '}
            <span style={{ color: 'rgb(0, 182, 255)' }}>$199</span>.
          </h2>
        </div>

        <img src={ChoiceImg} style={{ marginRight: '3%', marginLeft: '3%' }} />
      </div>
      <div className="flex w-full" style={{ marginBottom: '5%' }}>
        <div
          className="grid flex-grow  card  rounded-box place-items-center"
          style={{ marginRight: '3%', marginLeft: '3%' }}
        >
          <Link
            className="btn btn-error  w-full h-full"
            style={{ width: 'auto', fontSize: '3rem' }}
            href="/address"
            onClick={() => setPayNow('true')}
          >
            149$
          </Link>
        </div>

        <div
          className="grid  flex-grow  card  rounded-box place-items-center"
          style={{ marginRight: '3%', marginLeft: '3%' }}
        >
          <Link
            className="btn btn-info  w-full h-full"
            style={{ width: 'auto', fontSize: '3rem' }}
            href="/address"
            onClick={() => setPayNow('false')}
          >
            199$
          </Link>
        </div>
      </div>
      <div className=" p-2">
        <Question />
      </div>
    </div>
  )
}
