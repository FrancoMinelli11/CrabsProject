export const Button = ({ children, onClick, className }) => {
    return (
        <button
            className={`border-2 border-cyan-900 bg-blue-500 p-2 font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}