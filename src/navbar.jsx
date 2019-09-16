import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
  const pathLabelPairs = [
    ['/', 'Home'],
    ['/loans', 'Loans'],
    ['/directory', 'Directory'],
    ['/account', 'Account'],
  ];
  return (
    <nav>
      {
        pathLabelPairs.map((pair) => {
          const [path, label] = pair;
          return (
            <NavLink
              key={path}
              to={path}
              className="nav__link"
              activeClassName="nav__link--current"
            >
              {label}
            </NavLink>
          );
        })
      }
    </nav>
  );
}
