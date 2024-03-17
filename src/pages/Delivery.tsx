import { countries } from 'countries-list'
import { makeOrder } from 'helpers/api'
import { useState } from 'preact/hooks'
import payNow from 'atoms/payNow'

export default function () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [anotherWay, setAnotherWay] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [postCode, setPostCode] = useState('')

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [loading, setLoading] = useState(false)
  const countryOptions = Object.values(countries).map((country) => (
    <option key={country.name}>{country.name}</option>
  ))

  const handleSend = async () => {
    if (isValidEmail && email && country && city && address1) {
      setLoading(true)
      await makeOrder({
        name: name,
        email: email,
        anotherWay: anotherWay,
        country: country,
        cityOrTown: city,
        stateOrProvince: state,
        addressLine1: address1,
        addressLine2: address2,
        postCode: postCode,
        payNow: payNow.init,
      })
      setLoading(false)

      const elem: HTMLDialogElement = document.getElementById(
        'send'
      ) as HTMLDialogElement
      elem.showModal()
      startCountdown()
    }
  }

  const startCountdown = () => {
    const timerElement = document.getElementById('timer')
    let countdown = 4

    const countdownInterval = setInterval(() => {
      timerElement!.textContent = `Redirect to home page after ${countdown} seconds...`

      countdown--

      if (countdown === 0) {
        clearInterval(countdownInterval)
        window.location.href = '/'
      }
    }, 1000)
  }

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <div className="container mx-auto max-w-prose p-5 prose">
      <dialog id="send" className="modal">
        <div
          className="modal-box flex flex-col items-center"
          style={{ width: 'auto' }}
        >
          <h1
            className="font-bold text-white"
            style={{ marginTop: '0%', marginBottom: '0%' }}
          >
            Thank you
          </h1>
          <p
            className="py-4 justify-center text-white"
            style={{ marginTop: '0%', marginBottom: '0%', maxWidth: '100%' }}
          >
            order is accepted
          </p>
          <div id="timer" className="timer text-white">
            Redirect to home page after 5 seconds...
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">name</span>
          <span className="label-text">how can we call you</span>
        </div>
        <input
          type="text"
          placeholder="Carl Johnson"
          className="input input-bordered w-full text-white"
          value={name}
          onChange={(e) => {
            setName((e.target as HTMLInputElement).value)
          }}
        />
      </label>

      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">email</span>
        </div>
        <input
          type="text"
          placeholder="fuck@mouse.com"
          className={`input input-bordered text-white w-full ${(!email || !isValidEmail) && 'border-red-500'}`}
          value={email}
          onChange={(e) => {
            const inputEmail = (e.target as HTMLInputElement).value
            setEmail(inputEmail)
            setIsValidEmail(validateEmail(inputEmail))
          }}
        />
      </label>

      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">
            any other way to contact you
          </span>
        </div>
        <input
          type="text"
          placeholder="twitter: @elonmusk or other"
          className="input input-bordered w-full text-white"
          value={anotherWay}
          onChange={(e) => {
            setAnotherWay((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <label
        className="form-control w-full"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label">
          <span className="label-text text-white">country</span>
        </div>
        <select
          className={`select select-bordered ${!country && 'border-red-500'}`}
          onChange={(e) => setCountry((e.target as HTMLInputElement).value)}
        >
          <option disabled selected>
            Pick one
          </option>
          {countryOptions}
        </select>
      </label>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">state or province</span>
        </div>
        <input
          type="text"
          placeholder="San Andreas"
          className="input input-bordered w-full text-white"
          value={state}
          onChange={(e) => {
            setState((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">city or town</span>
        </div>
        <input
          type="text"
          placeholder="Los Santos"
          className={`input input-bordered text-white  w-full ${!city && 'border-red-500'}`}
          value={city}
          onChange={(e) => {
            setCity((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">address line 1</span>
        </div>
        <input
          type="text"
          placeholder="Ganton"
          className={`input input-bordered text-white w-full ${!address1 && 'border-red-500'}`}
          value={address1}
          onChange={(e) => {
            setAddress1((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">address line 2</span>
        </div>
        <input
          type="text"
          placeholder="4018 Grove Street"
          className="input input-bordered w-full text-white"
          value={address2}
          onChange={(e) => {
            setAddress2((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <label
        className="form-control items-center"
        style={{ marginTop: '0%', marginBottom: '3%' }}
      >
        <div className="label w-full">
          <span className="label-text text-white">post code</span>
        </div>
        <input
          type="text"
          placeholder="1337"
          className="input input-bordered w-full text-white"
          value={postCode}
          onChange={(e) => {
            setPostCode((e.target as HTMLInputElement).value)
          }}
        />
      </label>
      <div className="flex justify-end" style={{ marginTop: '3%' }}>
        <button className="btn btn-primary" onClick={handleSend}>
          {loading ? 'Finishing...' : 'Finish'}
        </button>
      </div>
    </div>
  )
}
