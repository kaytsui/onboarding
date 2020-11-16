import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body, author }) {
  return (
    <>
      <div>
        {`Title: ${title}`}
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
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
