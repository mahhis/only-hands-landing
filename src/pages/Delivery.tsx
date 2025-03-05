import { countries } from 'countries-list'
import { useState } from 'preact/hooks'

interface FormData {
  name: string
  email: string
  anotherWay: string
  country: string
  city: string
  state: string
  address1: string
  address2: string
  postCode: string
}

export default function () {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    anotherWay: '',
    country: '',
    city: '',
    state: '',
    address1: '',
    address2: '',
    postCode: '',
  })

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [loading] = useState(false)

  const handleChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailChange = (e: Event) => {
    const email = (e.target as HTMLInputElement).value
    setFormData((prev) => ({ ...prev, email }))
    setIsValidEmail(validateEmail(email))
  }

  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  // const handleSend = async () => {
  //   const { email, country, city, address1 } = formData
  //   if (isValidEmail && email && country && city && address1) {
  //     setLoading(true)
  //     try {
  //       await makeOrder({
  //         ...formData,
  //         payNow: payNow.init,
  //       })
  //       showConfirmationDialog()
  //     } catch (error) {
  //       console.error('Error submitting order', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }

  // const showConfirmationDialog = () => {
  //   const elem: HTMLDialogElement = document.getElementById(
  //     'send'
  //   ) as HTMLDialogElement
  //   elem.showModal()
  //   startCountdown()
  // }

  // const startCountdown = () => {
  //   const timerElement = document.getElementById('timer')
  //   let countdown = 5

  //   const countdownInterval = setInterval(() => {
  //     if (timerElement) {
  //       timerElement.textContent = `Redirect to home page after ${countdown} seconds...`
  //     }

  //     countdown--

  //     if (countdown === 0) {
  //       clearInterval(countdownInterval)
  //       window.location.href = '/'
  //     }
  //   }, 1000)
  // }

  const countryOptions = Object.values(countries).map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ))

  return (
    <div className="container mx-auto max-w-prose p-5 prose">
      <dialog id="send" className="modal">
        <div
          className="modal-box flex flex-col items-center"
          style={{ width: 'auto' }}
        >
          <h1 className="font-bold text-white">Thank you</h1>
          <p className="py-4 justify-center text-white">Order is accepted</p>
          <div id="timer" className="timer text-white">
            Redirecting...
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">name</span>
          <span className="label-text">how can we call you</span>
        </div>
        <input
          type="text"
          placeholder="Carl Johnson"
          className="input input-bordered w-full text-white"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">email</span>
        </div>
        <input
          type="text"
          placeholder="fuck@mouse.com"
          className={`input input-bordered w-full text-white ${(!formData.email || !isValidEmail) && 'border-red-500'}`}
          value={formData.email}
          name="email"
          onChange={handleEmailChange}
          required
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">
            any other way to contact you
          </span>
        </div>
        <input
          type="text"
          placeholder="twitter: @elonmusk or other"
          className="input input-bordered w-full text-white"
          value={formData.anotherWay}
          name="anotherWay"
          onChange={handleChange}
        />
      </label>

      <label className="form-control w-full mb-3">
        <div className="label">
          <span className="label-text text-white">country</span>
        </div>
        <select
          className={`select select-bordered ${!formData.country && 'border-red-500'}`}
          value={formData.country}
          name="country"
          onChange={handleChange}
          required
        >
          <option disabled selected>
            Pick one
          </option>
          {countryOptions}
        </select>
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">state or province</span>
        </div>
        <input
          type="text"
          placeholder="San Andreas"
          className="input input-bordered w-full text-white"
          value={formData.state}
          name="state"
          onChange={handleChange}
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">city or town</span>
        </div>
        <input
          type="text"
          placeholder="Los Santos"
          className={`input input-bordered text-white w-full ${!formData.city && 'border-red-500'}`}
          value={formData.city}
          name="city"
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">address line 1</span>
        </div>
        <input
          type="text"
          placeholder="Ganton"
          className={`input input-bordered text-white w-full ${!formData.address1 && 'border-red-500'}`}
          value={formData.address1}
          name="address1"
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">address line 2</span>
        </div>
        <input
          type="text"
          placeholder="4018 Grove Street"
          className="input input-bordered w-full text-white"
          value={formData.address2}
          name="address2"
          onChange={handleChange}
        />
      </label>

      <label className="form-control items-center mb-3">
        <div className="label w-full">
          <span className="label-text text-white">post code</span>
        </div>
        <input
          type="text"
          placeholder="1337"
          className="input input-bordered w-full text-white"
          value={formData.postCode}
          name="postCode"
          onChange={handleChange}
        />
      </label>

      <div className="flex justify-end">
        <a className="btn btn-primary text-xl" href={'./close'}>
          {loading ? 'Finishing...' : 'Finish'}
        </a>
      </div>
    </div>
  )
}
