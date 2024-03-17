const base = 'http://134.209.196.144:1337'

export async function getInfo(token: string) {
  return (
    await fetch(`${base}/info`, {
      headers: {
        token,
      },
    })
  ).json()
}

export async function makeOrder(body) {
  return (
    await fetch(`${base}/order`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()
}

export async function askQuestion(body) {
  return (
    await fetch(`${base}/question`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()
}
