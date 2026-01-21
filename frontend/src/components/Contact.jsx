import React, { useState } from "react";

function Contact() {

  const [data,setData] = useState({name:"",email:"",subject:"",description:""});

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setData({...data,[name]:value});

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {name,email,subject,description} = data;

    if (!(name && email && subject && description)) {
      alert("All fields are necessary ");
      return;
    }
     

    const sendMail = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent( `Name:${name}\n\nDescription:${description}`)}`
      window.location.href = sendMail;

      

      setData({
        name:" ",
        description:"",
        subject:"",
        email :""
      })  
  }

  return (
    <div className=" bg-cyan-950 min-h-[500px] h-auto p-20 ">
      <div className=" mt-10 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Send Us Feedback
        </h2>
        <form onSubmit={(e)=>handleSubmit(e)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
            name="name"
            onChange={(e)=>handleChange(e)}
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
            name="email"
            onChange={(e)=>handleChange(e)}
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
            onChange={(e)=>handleChange(e)}
            name="subject"
              type="text"
              placeholder="subject"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
            name="description"
            onChange={(e)=>handleChange(e)}
              rows="4"
              placeholder="Your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
