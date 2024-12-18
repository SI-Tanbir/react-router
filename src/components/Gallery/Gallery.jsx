import { Link, useLoaderData } from "react-router-dom"




function Gallery() {
    const data =useLoaderData();

//   const  {id,thumbnailUrl,title,url} = data;

// body
// : 
// "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id
// : 
// 1
// title
// : 
// "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId
// : 
// 1


console.log(data)
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>

        {
            data.map((res,index)=>(
            <div key={index} style={{margin:'10px',border:'2px solid red' }}>

               <p>postId: {res.id}</p>
               <p>title: {res.title}</p>

              
             <Link  className="bg-amber-500 p-[4px] rounded-md " to={`/post/${res.id}`}>Post Details</Link>

            </div>
                ))
        }
        
    </div>
  )
}

export default Gallery