import { useLoaderData, useNavigate } from "react-router-dom"


function PostDetails() {

    const data=useLoaderData();
    const navigate =useNavigate();
    function goBack(){

        navigate(-1);
        
    }


        


  return (
    <div className="m-8 p-4 rounded-lg bg-slate-200 border">

        <h3>Title:{data.title}</h3>
        <p>body:{data.body}</p>
        <button className="bg-amber-500 rounded-md p-2 m-2" onClick={goBack}>Go Back</button>

    </div>
  )
}

export default PostDetails