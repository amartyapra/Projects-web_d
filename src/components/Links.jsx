import React from 'react';
import { NavLink } from 'react-router-dom';

const linkss=[
    {url:'/search',text:'All'},
    {url:'/news',text:'News'},
    {url:'/image',text:'Images'},
    {url:'/videos',text:'Videos'},
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {linkss.map(({url,text}) => (
            <NavLink  exact={true} className="text-xl m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" to={url}>
                {text}
            </NavLink>    
        ))}
    </div>
  )
}
