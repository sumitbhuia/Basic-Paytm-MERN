export function Appbar(){

    return (
        <div className="shadow h-14 flex justify-between items-center px-4 bg-blue-100 py-10">
            
            <div className="flex items-center">
                <img  className="h-10 w-auto " src="src/assets/paytm-icon.png" alt="PayTM logo"/>
            </div>
            
            <div className="flex items-center">
                <div className=" flex items-center ml-4 text-gray-700">
                    Hello
                </div>

                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400 mx-2">
                    <div className="flex flex-col justify-center h-full text-xl "> 
                        <div className="text-xl text-gray-700">S</div>
                    </div>
                </div>
            </div>
            
        </div>
    )

}