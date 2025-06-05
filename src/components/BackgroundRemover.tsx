
import React, { useState } from 'react';
import { Upload, Download, ImageIcon, Loader2 } from 'lucide-react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    setError(null);
    setProcessedImage(null);
    
    // Show original image
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Process the image
    setIsProcessing(true);
    try {
      const imageElement = await loadImage(file);
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
    } catch (err) {
      console.error('Background removal failed:', err);
      setError('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'image-no-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-purple-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 bg-pink-300 rotate-45 opacity-40"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block">
              Background Remover
            </h2>
            <div className="w-32 h-1 bg-purple-400 mx-auto mt-4 transform rotate-1"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Upload any image and automatically remove its background using AI!
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-white p-8 transform rotate-1 border-2 border-gray-300 shadow-lg mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Click to upload an image
                </p>
                <p className="text-gray-500">PNG, JPG, or any image format</p>
              </label>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 p-4 transform -rotate-1 border-2 border-red-300 mb-8">
              <p className="text-red-700 font-semibold">{error}</p>
            </div>
          )}

          {/* Image Display Area */}
          {(originalImage || isProcessing) && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Original Image */}
              <div className="bg-gray-100 p-6 transform -rotate-1 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Original</h3>
                {originalImage ? (
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-64 object-contain rounded"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Processed Image */}
              <div className="bg-gray-100 p-6 transform rotate-1 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">No Background</h3>
                {isProcessing ? (
                  <div className="w-full h-64 flex flex-col items-center justify-center">
                    <Loader2 className="h-12 w-12 text-purple-500 animate-spin mb-4" />
                    <p className="text-gray-600">Removing background...</p>
                  </div>
                ) : processedImage ? (
                  <div className="relative">
                    <img
                      src={processedImage}
                      alt="Processed"
                      className="w-full h-64 object-contain rounded"
                      style={{ backgroundColor: 'transparent' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-20 -z-10 rounded" 
                         style={{ backgroundImage: 'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)' }}></div>
                  </div>
                ) : (
                  <div className="w-full h-64 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Download Button */}
          {processedImage && !isProcessing && (
            <div className="text-center mt-8">
              <button
                onClick={downloadImage}
                className="bg-green-400 hover:bg-green-500 text-white px-8 py-4 text-lg font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg flex items-center mx-auto gap-2"
              >
                <Download className="h-5 w-5" />
                Download Image
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BackgroundRemover;
