// Imports
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import moment from 'moment';

import { rhythm, scale } from '../utils/typography';

// Component
const Meetups = ({ pageContext }) => {
  const { results } = pageContext.meetups[0].data;

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
          textAlign: 'center',
        }}
      >
        Upcoming Meetups
      </h6>

      <ul
        style={{
          textAlign: 'center',
          margin: 0,
        }}
        className="flex-column-container"
      >
        {results.length ? (
          results.map(meetup => (
            <li
              key={meetup.id}
              className="flex-column-container flex-containee"
            >
              <img src={meetup.photo_url} alt={meetup.name} />

              <div>{meetup.name}</div>

              {meetup.venue && meetup.venue.address_1 ? (
                <div>
                  {meetup.venue.address_1}, {meetup.venue.city}
                </div>
              ) : (
                <div>Location TBD</div>
              )}

              <div>
                <div title={moment(meetup.time).format('LLLL')}>
                  Takes place {moment(meetup.time).fromNow()}
                </div>

                <a
                  href={meetup.event_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {meetup.rsvp_limit ? (
                      <span>
                        RSVP ({meetup.yes_rsvp_count}/{meetup.rsvp_limit}{' '}
                        Attending)
                      </span>
                    ) : (
                      <span>RSVP ({meetup.yes_rsvp_count} Attending)</span>
                    )}
                  </span>
                </a>
              </div>
            </li>
          ))
        ) : (
          <Fragment>
            <li className="flex-column-container flex-containee">
              No upcoming meetups were found.
            </li>

            <li className="flex-column-container flex-containee">
              Please check back soon!
            </li>
          </Fragment>
        )}
      </ul>

      <br />

      <Link to="/">← Back</Link>
    </div>
  );
};

// Prop Types
Meetups.propTypes = {
  pageContext: PropTypes.object,
};

export default Meetups;
