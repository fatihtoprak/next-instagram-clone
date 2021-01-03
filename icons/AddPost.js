import * as React from 'react'

function SvgAddPost(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.9 24H8.1c-3.3 0-4.8-.8-6.05-2C.8 20.7 0 19.2 0 15.9V8.1c0-3.3.8-4.8 2-6.05C3.3.8 4.8 0 8.1 0h7.8c3.3 0 4.8.8 6.05 2C23.2 3.3 24 4.8 24 8.1v7.8c0 3.3-.8 4.8-2 6.05C20.7 23.2 19.2 24 15.9 24zM8.1 1.5c-3.1 0-4.2.8-5.05 1.6-.75.8-1.55 1.9-1.55 5v7.8c0 3.1.8 4.2 1.6 5.05.8.8 1.9 1.55 5 1.55h7.8c3.1 0 4.2-.8 5.05-1.6.8-.8 1.55-1.9 1.55-5V8.1c0-3.1-.8-4.2-1.6-5.05-.8-.75-1.9-1.55-5-1.55H8.1z"
                fill="currentColor"
            />
            <path
                d="M18.15 12.75H5.85c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h12.3c.4 0 .75.35.75.75s-.35.75-.75.75z"
                fill="currentColor"
            />
            <path
                d="M12 18.9c-.4 0-.75-.35-.75-.75V5.85c0-.4.35-.75.75-.75s.75.35.75.75v12.3c0 .4-.35.75-.75.75z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgAddPost
