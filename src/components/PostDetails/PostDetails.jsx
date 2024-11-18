import { useLoaderData } from "react-router-dom"


// body
// : 
// "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
// id
// : 
// 2
// title
// : 
// "qui est esse"
// userId
// :
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