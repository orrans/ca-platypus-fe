import { useParams } from 'react-router-dom'

export function StayCheckout() {
  const { stayId } = useParams()

  return (
    <section>
      <h1>Checkout page</h1>
      <p>Stay ID: {stayId}</p>
    </section>
  )
}
