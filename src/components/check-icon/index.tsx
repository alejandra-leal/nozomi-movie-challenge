import React from "react";

export const CheckIcon: React.FC<IProps> = ({ color }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M9 12L10.6828 13.6828V13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828V13.6828L15 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IProps {
  color: string;
}
