import { Link } from "react-router-dom"




const ErrorPage = () => {
  return (
    <div> 

        <h3>!!!Opps , wrong pages</h3>

    <Link  to='/'><button className="bg-gray-800 rounded-md text-white p-3 mt-5">Go back</button></Link>

    </div>

  )
}

export default ErrorPage