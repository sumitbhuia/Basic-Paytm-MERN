export function Balance({value}){
    return(<div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        <div className="text-xl font-bold text-gray-800">Your balance </div>
        <div className="font-semibold text-xl text-green-600 ml-4 ">$ {value.toFixed(2)}</div>
    </div>)
}