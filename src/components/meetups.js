import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'

import { rhythm, scale } from '../utils/typography'

const AllMeetups = ({ pageContext: { allMeetups } }) => {
  const allMeetupsData = allMeetups[0].data.results
  // console.log('allMeetupsData: ', allMeetupsData);

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
      }}
    >
      <h6
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        Upcoming Meetups
      </h6>

      <ul
        style={{
          textAlign: 'center',
          listStyle: 'none',
          margin: 0,
        }}
        className="flex-column-container"
      >
        {allMeetupsData.length ? (
          allMeetupsData.map(curMeetup => (
            <li
              key={curMeetup.id}
              className="flex-column-container flex-containee"
            >
              <img src={curMeetup.photo_url} alt={curMeetup.name} />

              <div>{curMeetup.name}</div>

              <div>
                {curMeetup.venue.address_1}, {curMeetup.venue.city}
              </div>

              <div>
                <div>Takes place {moment(curMeetup.time).fromNow()}</div>

                <a
                  href={curMeetup.event_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {curMeetup.rsvp_limit ? (
                      <span>
                        RSVP ({curMeetup.yes_rsvp_count}/{curMeetup.rsvp_limit}{' '}
                        Attending)
                      </span>
                    ) : (
                      <span>RSVP ({curMeetup.yes_rsvp_count} Attending)</span>
                    )}
                  </span>
                </a>
              </div>
            </li>
          ))
        ) : (
          <li className="flex-column-container flex-containee">
            No upcoming Meetups were found. Check back soon!
          </li>
        )}
      </ul>
      <br />
      <Link to="/">← Back</Link>
    </div>
  )
}

AllMeetups.propTypes = {
  pageContext: PropTypes.object,
}

export default AllMeetups
