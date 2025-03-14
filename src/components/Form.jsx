import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        imageUrl: "",
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book Added:", formData);
        navigate("/"); 
      };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Book Details</h2>

    <form className="flex flex-col gap-4 text-black " onSubmit={handleSubmit}>
        <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input type="text" placeholder="Enter book title" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}/>
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Author</label>
            <input type="text" placeholder="Enter author's name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  onChange={handleChange} />
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea placeholder="Enter book description" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  onChange={handleChange}></textarea>
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Cover Image URL</label>
            <input type="url" placeholder="Enter image URL" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  onChange={handleChange}/>
        </div>

        <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          
        </div>
    </form>
</div>

  )
}

export default Form
