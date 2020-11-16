import React from 'react';
import PropTypes from 'prop-types';

export default function Post({
  title, date, body, author,
}) {
  return (
    <>
      <div>
        {`Title: ${title}`}
      </div>
      <div>
        {`Date: ${date}`}
      </div>
      <div>
        {`Body: ${body}`}
      </div>
      <div>
        {`Author: ${author} \n`}
      </div>
      <br />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
