import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";
import pdf from "./Resume.pdf";

const Resume = () => {
    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch("Resume.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "ResumeJustinPullman.pdf";
                alink.click();
            });
        });
    };

  return(
    <div name='resume' className='pt-20'>
        <div className='pt-30'>
            <center>
                <button className='text-end text-2xl font-bold w-full text-gray-300 bg-[#0a192f] pr-16' onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </div>
        <div>
        <PDFViewer pdfURL={pdf} />; 
            
        </div>
        
        
    </div>
    
  ) 
};

export default Resume;