
import { useState } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import { Button } from "@/components/ui/button";
import { Upload, Download, Loader2 } from "lucide-react";

const BackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show original image
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    setIsProcessing(true);
    setProcessedImage(null);

    try {
      const imageElement = await loadImage(file);
      const resultBlob = await removeBackground(imageElement);
      
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'image-no-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-8 transform -rotate-1 border-2 border-gray-300 shadow-lg max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🎨 Background Remover
      </h3>
      
      <div className="space-y-6">
        <div className="text-center">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="bg-blue-50 border-2 border-dashed border-blue-300 p-8 rounded-lg hover:bg-blue-100 transition-colors">
              <Upload className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-700">
                Click to upload an image
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: JPG, PNG, WebP
              </p>
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {isProcessing && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
            <p className="text-lg font-semibold text-gray-700">
              Removing background... This may take a moment
            </p>
          </div>
        )}

        {(originalImage || processedImage) && (
          <div className="grid md:grid-cols-2 gap-6">
            {originalImage && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Original</h4>
                <img 
                  src={originalImage} 
                  alt="Original" 
                  className="w-full h-48 object-contain border-2 border-gray-300 rounded bg-gray-50"
                />
              </div>
            )}
            
            {processedImage && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">No Background</h4>
                <img 
                  src={processedImage} 
                  alt="Processed" 
                  className="w-full h-48 object-contain border-2 border-gray-300 rounded"
                  style={{ background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px' }}
                />
                <Button 
                  onClick={downloadProcessedImage}
                  className="w-full mt-4 bg-green-500 hover:bg-green-600"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Result
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemover;
