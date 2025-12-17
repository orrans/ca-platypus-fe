
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export function StayDetails() {
  const { stayId } = useParams()

  return (
    <section className="stay-details">
      Stay ID: {stayId}
    </section>
  )
}



// import { useEffect, useState } from 'react'
// import { stayService } from '../services/stay'

// export function StayDetails() {
//   const { stayId } = useParams()
//   const [stay, setStay] = useState(null)

//   useEffect(() => {
//     loadStay()
//   }, [stayId])

//   async function loadStay() {
//     try {
//       const stay = await stayService.getById(stayId)
//       setStay(stay)
//     } catch (err) {
//       console.log('Cannot load stay', err)
//     }
//   }

//   if (!stay) return <div>Loading...</div>

//   return (
//     <section className="stay-details">
//       <h1>{stay.name}</h1>

//       <p>
//         {stay.loc.city}, {stay.loc.country}
//       </p>

//       <p>
//         <strong>${stay.price}</strong> / night
//       </p>

//       {stay.imgUrls && stay.imgUrls.length > 0 && (
//         <img
//           src={stay.imgUrls[0]}
//           alt={stay.name}
//           style={{ maxWidth: '400px' }}
//         />
//       )}

//       <button
//         style={{
//           backgroundColor: '#FF5A5F',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           padding: '12px 24px',
//           fontSize: '16px',
//           fontWeight: '600',
//           cursor: 'pointer'
//         }}
//       >
//         Reserve
//       </button>
//     </section>
//   )
// }
