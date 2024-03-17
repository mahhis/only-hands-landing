import { Link } from 'preact-router'
export default function () {
  return (
    <div className="flex justify-center" style={{ marginTop: '0%' }}>
      <Link
        className="btn btn-primary"
        href="/pay"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
          height: 'auto',
          padding: '0',
          borderRadius: '2.5rem',
          position: 'relative',
        }}
      >
        <img
          src="/img/buy.webp"
          alt="Button Image"
          style={{
            padding: '0',
            marginBottom: 0,
            marginTop: 0,
          }}
        />
      </Link>
    </div>
  )
}
