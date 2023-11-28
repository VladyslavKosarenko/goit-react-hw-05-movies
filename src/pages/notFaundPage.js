import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      Sorry, go home <Link to="/">here</Link>.
    </div>
  );
};

export default NotFoundPage;
