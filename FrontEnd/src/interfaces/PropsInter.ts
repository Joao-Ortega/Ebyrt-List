import React from 'react';

export interface IPropsChildren extends React.HTMLAttributes<Element> {
  children: React.ReactNode
  // add any custom props, but don't have to specify `children`
}
