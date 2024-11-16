import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';

const CreateExpressionView = () => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });

  // Image preview state
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Create Your Expression</h1>
        </div>
      </div>

      {/* Form */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
          {/* Title Input */}
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title of your expression"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          {/* Description Textarea */}
          <div className="mb-4">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Express how you are feeling..."
              className="w-full p-3 border border-gray-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Image Upload and Submit Buttons */}
          <div className="flex flex-col space-y-3">
            {/* Hidden file input */}
            <input
              type="file"
              id="image-upload"
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            {/* Image Upload Button */}
            <label 
              htmlFor="image-upload"
              className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-500 hover:text-red-500 transition-colors flex items-center justify-center uppercase font-medium cursor-pointer"
            >
              <ImagePlus size={20} className="mr-2" />
              Upload Image
            </label>

            {/* Create Expression Button */}
            <button 
              type="submit"
              className="w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium uppercase"
            >
              Create Expression
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExpressionView;