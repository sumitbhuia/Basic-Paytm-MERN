import { Link } from "react-router-dom"

export function Warning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div className="text-gray-600">
        {label}
      </div>
      <Link className="underline text-blue-500 pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}
  