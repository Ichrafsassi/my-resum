function Contact() {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-4">Contact</h2>
        <p><strong className="text-gray-800">Phone:</strong> <span className="text-gray-600">+216 54020213</span></p>
        <p><strong className="text-gray-800">Email:</strong> <span className="text-gray-600">ichraf.sassi.789@gmail.com</span></p>
        <p><strong className="text-gray-800">Location:</strong> <span className="text-gray-600">Tunis, Tunisia</span></p>
        <div className="mt-2">
          <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a> | 
          <a href="https://github.com" className="text-blue-500 hover:underline ml-2">GitHub</a>
        </div>
      </section>
    );
  }
  
  export default Contact;