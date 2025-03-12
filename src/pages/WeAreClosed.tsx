export default function WeAreClosed() {
  return (
    <div className="container mx-auto prose w-full">
      <div className="card w-full">
        <div className="card-body w-full">
          <h2>
            We apologize, but this project is no longer active, and the servers
            are no longer accepting purchase requests.
          </h2>
          <h2>
            If you have any questions or would like to discuss the project, feel
            free to contact me.
          </h2>
          <h2>
            You can reach me on Telegram:{' '}
            <span className="text-blue-500">@ma66is</span> or by email:{' '}
            <span className="text-blue-500">vasiukovich03@gmail.com</span>.
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <a className="btn btn-primary text-xl" href="./">
          Main page
        </a>
      </div>
    </div>
  )
}
