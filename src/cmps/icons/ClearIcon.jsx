export function ClearIcon({ size = 12, strokeWidth = 4 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
                display: 'block',
                fill: 'none',
                height: size,
                width: size,
                stroke: 'currentcolor',
                strokeWidth: strokeWidth,
                overflow: 'visible',
            }}>
            <path d="m6 6 20 20M26 6 6 26"></path>
        </svg>
    )
}
