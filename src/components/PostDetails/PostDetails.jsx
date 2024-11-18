import { useLoaderData } from "react-router-dom"


function PostDetails() {

    const data=useLoaderData();
  return (
    <div className="m-8 bg-slate-200 border">

        <h3>Title:{data.title}</h3>
        <p>body:{data.body}</p>

    </div>
  )
}

export default PostDetails