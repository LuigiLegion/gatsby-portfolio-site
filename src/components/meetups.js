import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const AllMeetups = ({ pageContext: { allMeetups } }) => {
  const allMeetupsData = allMeetups[0].data.results;
  // console.log('allMeetupsData: ', allMeetupsData);

  return (
    <div style={{ width: 960, margin: '4rem auto' }}>
      <h1>Upcoming Meetups:</h1>

      <ul style={{ padding: 0 }}>
        {allMeetupsData.length ? (
          allMeetupsData.map(curMeetup => (
            <li
              key={curMeetup.id}
              style={{
                textAlign: 'center',
                listStyle: 'none',
                display: 'inline-block',
              }}
            >
              <img src={curMeetup.photo_url} alt={curMeetup.name} />

              <div>{curMeetup.name}</div>

              <div>
                {curMeetup.venue.address_1}, {curMeetup.venue.city}{' '}
              </div>

              <div>
                <div>Takes place {moment(curMeetup.time).fromNow()}</div>

                <a
                  href={curMeetup.event_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media"
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
          <li
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block',
          }}
          >
          No upcoming Meetups were found.
          </li>
        )}
      </ul>
    </div>
  );
};

AllMeetups.propTypes = {
  pageContext: PropTypes.object,
};

export default AllMeetups;
