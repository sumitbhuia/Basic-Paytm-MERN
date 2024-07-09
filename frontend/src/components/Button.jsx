export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-full py-2.5 px-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300">{label}</button>
}