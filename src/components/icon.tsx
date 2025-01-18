import React, { JSX } from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

type Icons = {
  [key: string]: JSX.Element;
}

export type IconName = 'msg'| 'search'| 'nav-list';

const Icon = ({ name, color = "currentColor",fill=true, width = 28, height = 28 }: IconProps & { name: IconName }) => {
  const icons: Icons = {
    search: (
      <>
      <circle cx="10.1404" cy="11.0175" r="9.39035" stroke="#9C9C9D" stroke-width="1.5"/>
<line x1="16.0391" y1="18.2416" x2="24.39" y2="26.5925" stroke="#9C9C9D" stroke-width="1.5"/>

      </>
    ),
    'nav-list': (
      <>
      <line x1="0.982422" y1="1.32007" x2="32" y2="1.32007" stroke="#9C9C9D" stroke-width="1.5"/>
<line x1="0.982483" y1="12.0569" x2="32" y2="12.0569" stroke="#9C9C9D" stroke-width="1.5"/>
<line x1="0.982483" y1="22.7937" x2="32" y2="22.7937" stroke="#9C9C9D" stroke-width="1.5"/>
</>
    ),
    msg: (
      <>
        <rect x="1.66229" y="1.6272" width="30.7105" height="21.1667" stroke="#9C9C9D" stroke-width="1.5"/>
<path d="M4.49121 5.64917L16.421 14.5965L29.5438 5.64917" stroke="#9C9C9D" stroke-width="1.5"/>

      </>
    )

  };
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill ? color: 'none'} width={width} height={height} viewBox="0 0 34 24">
      {icons[name]}
    </svg>
  );
};

export default Icon;