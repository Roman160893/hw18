import * as React from "react"

const Comments = (props) => (
   <svg className="comments"
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
         d="M44 6H4v30h9v5l10-5h21V6Z"
         fill="#2F88FF"
         stroke="#000"
         strokeWidth={4}
         strokeLinecap="round"
         strokeLinejoin="round"
      />
      <path
         d="M14 19.5v3M24 19.5v3M34 19.5v3"
         stroke="#fff"
         strokeWidth={4}
         strokeLinecap="round"
         strokeLinejoin="round"
      />
   </svg>
)

export default Comments
