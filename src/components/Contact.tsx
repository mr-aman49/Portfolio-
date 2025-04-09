import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAiResponse("Processing your message...");
    
    // Simulate form submission with AI response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setAiResponse(`Thanks for reaching out, ${formData.name}! I'll analyze your request about "${formData.subject}" and get back to you shortly.`);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setAiResponse(null);
      }, 8000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">amanraj.87892@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Bangalore, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+91 8792053907</p>
                </div>
              </div>
              
              {/* AI Assistant Chat Bubble */}
              {aiResponse && (
                <div className="mt-6 relative">
                  <div className="absolute -left-3 top-5 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div className="ml-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30">
                    <div className="text-blue-300">
                      <p>{aiResponse}</p>
                      <div className="mt-2 flex space-x-1">
                        <span className="animate-pulse">●</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>●</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>●</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg">
              {submitSuccess && !aiResponse && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all disabled:opacity-70 group"
              >
                <span className="inline-flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
