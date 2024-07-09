export function Inputbox({label , placeholder , onChange}){

    return(
    <div className="mb-4">
    <div className ="text-sm font-bold py-2 text-left text-gray-700" >{label}</div>
    <div>   
        <input  onChange={onChange} placeholder={placeholder} className="w-full text-sm py-2 px-3 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"></input>
    </div>
    </div> )
}