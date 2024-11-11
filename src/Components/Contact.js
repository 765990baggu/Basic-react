const Contact = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-3xl">Contact Us page</h1>
      <form className="my-4">
        <input
          type="text"
          className=" border border-black p-2 mx-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
