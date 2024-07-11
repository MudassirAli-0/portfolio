import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from './Navbar';
import Footer from './Footer';

import resumePDF from './assets/MudassirCV.pdf';

// Set the workerSrc for the pdfjs library using a CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'MudassirCV.pdf';
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className='w-full bg-[rgb(17,24,39)] p-10'>
        <div className='max-w-screen-xl mx-auto mt-10'>
          <div className='relative'>
            <Document
              file={resumePDF}
              onLoadError={(error) => console.error('Error while loading document:', error)}
              onSourceError={(error) => console.error('Error while loading document source:', error)}
            >
              <Page pageNumber={1} />
            </Document>
            <div className="mt-4">
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
