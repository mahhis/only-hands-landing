import { useState } from 'preact/hooks'

const questions = [
  'Why is the price so high?',
  'Will it definitely fit my screen??',
  'How is the camera connected??',
  'I dont know what to cook for dinner today',
  'I want to chat, I have a lot of questions',
  'Do I really need it??',
]

export default function () {
  const [contact, setContact] = useState('')
  const [question, setQuestion] = useState('')
  const [loading] = useState(false)

  const generatePlaceholderText = () => {
    const textarea = document.querySelector('.textarea') as HTMLTextAreaElement
    if (textarea) {
      const randomIndex = Math.floor(Math.random() * questions.length)
      const randomQuestion = questions[randomIndex]
      textarea.placeholder = randomQuestion
    }
  }
  // const handleSend = async () => {
  //   if (contact && question) {
  //     setLoading(true)
  //     await askQuestion({
  //       contact: contact,
  //       question: question,
  //     })
  //     setLoading(false)
  //     setContact('')
  //     setQuestion('')
  //     const elem: HTMLDialogElement = document.getElementById(
  //       'send'
  //     ) as HTMLDialogElement
  //     elem.showModal()
  //   }
  // }

  return (
    <div
      className="collapse collapse-arrow bg-base-200"
      style={{
        marginBottom: '3%',
        marginTop: '3%',
      }}
    >
      <dialog id="send" className="modal">
        <div
          className="modal-box flex flex-col items-center"
          style={{ width: 'auto' }}
        >
          <h1
            className="font-bold"
            style={{ marginTop: '0%', marginBottom: '0%' }}
          >
            Sent!
          </h1>
          <p
            className="py-4 justify-center"
            style={{ marginTop: '0%', marginBottom: '0%', maxWidth: '100%' }}
          >
            we're already going to answer
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <input
        type="checkbox"
        className="peer"
        onClick={() => generatePlaceholderText()}
      />

      <div className="collapse-title text-xl font-medium">
        <h3 style={{ marginTop: '0%', marginBottom: '0%' }}>Questions?</h3>
      </div>
      <div className="collapse-content text-xl font-medium">
        <label className={`form-control `}>
          <div className="label">
            <span className="label-text ">any ways to contact you</span>
          </div>
          <input
            type="text"
            placeholder="twitter: @elonmusk, email or other"
            className={`input input-bordered w-full required ${!contact && 'border-red-500'}`}
            value={contact}
            onChange={(e) => {
              setContact((e.target as HTMLInputElement).value)
            }}
          />
        </label>
        <label className={`form-control`}>
          <div className="label">
            <span className="label-text">question</span>
          </div>
          <textarea
            className={`textarea textarea-bordered h-24 required ${!question && 'border-red-500'}`}
            placeholder=""
            value={question}
            onChange={(e) => {
              setQuestion((e.target as HTMLInputElement).value)
            }}
          ></textarea>
        </label>
        <div className="flex justify-end" style={{ marginTop: '3%' }}>
          <a className="btn btn-primary text-xl" href={'/close'}>
            {loading ? 'Sending...' : 'Send'}
          </a>
        </div>
      </div>
    </div>
  )
}
