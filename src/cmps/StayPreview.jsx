import { Link } from 'react-router-dom'
import { differenceInDays, format } from 'date-fns'
import { shortDateFmt } from '../services/stay/date.service'
import { Fragment } from 'react'
import { StarIcon } from './StarIcon'

export function StayPreview({ stay, fromDate, toDate, variant = 'explore' }) {
    const days = differenceInDays(toDate, fromDate)
    return (
        <Link to={`/stay/${stay._id}`} target="_blank" className="stay-preview">
            <div className="stay-inner-img">
                {stay.imgUrls && stay.imgUrls.length > 0 && (
                    <img src={stay.imgUrls[0]} alt={stay.name} />
                )}
            </div>
            <div className="stay-inner-details">
                <h4>
                    {stay.type} in {stay.name}
                </h4>
                {variant === 'normal' && (
                    <Fragment>
                        <span>{stay.summary}</span>
                        <span>
                            {stay.beds} &bull; {stay.bedrooms}
                        </span>
                    </Fragment>
                )}
                {variant === 'explore' && (
                    <span>
                        {format(fromDate, shortDateFmt)} - {format(toDate, 'dd')}
                    </span>
                )}
                <div>
                    <span>
                        ${stay.price * days} for {days} nights
                    </span>
                    &nbsp; &bull; &nbsp;
                    <span>
                        <StarIcon />
                        4.9
                    </span>
                </div>
            </div>
        </Link>
    )
}
