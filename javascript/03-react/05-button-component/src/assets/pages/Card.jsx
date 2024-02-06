const Card = () => {
    return ( 
        <div>
            <div className="m-10 grid grid-cols-4 gap-5">
                {/* <button className="bg-red-500 px-3 py-2 rounded">Hello</button> */}
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((value)=>(<div className=" bg-red-400 w-full p-5 mx-auto flex flex-col " key={value}>
                    <div className="space-y-5">
                    <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEiHYfiSqbVnoj4aSChOn_KHt0c1_lYLJcg&usqp=CAU" alt="image" className="w-32 h-32 object-cover rounded-full mx-auto" />
                    </div>
                    <div className="text-center">
                    <h4 className="font-semibold">Abirami Prabhakaran</h4>
                    <small>Fullstack Engineer</small>
                </div>
                    </div>
                </div>))}
                
                
            </div>
        </div>
     );
}
 
export default Card;