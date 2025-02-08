import React from "react";

const Contact = () => {
  return (
    <div className="flex px-5 justify-around bg-sky-50 py-10">
      <div className="grid grid-cols">
        <h2 className="font-medium font-mono text-2xl p-1">Get in touch</h2>
        <input
          type="name"
          name=""
          placeholder="Your name *"
          className=" border-2 p-2 my-5 pr-56 pl-2 m-1 "
        />
        <input
          type="email"
          name=""
          placeholder="Your email *"
          className=" border-2 p-2 my-2 pr-56 pl-2 m-1 "
        />
        <input
          type="text"
          name=""
          placeholder="Subject"
          className=" border-2 p-2 my-5 pr-56 pl-2 m-1 "
        />
        <textarea
          placeholder="Type your message here..."
          className=" border-2 p-2 my-2 pr-56 pl-2 m-1 "
        />

        <div>
          <button className="bg-blue-500 p-5 my-5 rounded-2xl text-white font-medium text-xl hover:bg-red-400">
            Send Message
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-medium font-mono text-2xl p-1 mb-3">
          Contact info
        </h2>
        <h2 className="text-xl font-semibold p-1">Postal Address</h2>
        <h2 className="p-1 mb-5">
          442 Belle Terre St Floor 7, San Francisco, AV 4206
        </h2>
        <h2 className="text-xl font-semibold p-1">Business Phone</h2>
        <h2 className="p-1 mb-5">+(642) 342 762 44</h2>
        <h2 className="text-xl font-semibold p-1">Say Hello</h2>
        <h2 className="p-1 mb-5">support@.com</h2>
      </div>
    </div>
  );
};

export default Contact;
