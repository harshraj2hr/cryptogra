import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadPopupProps {
  onClose: () => void;
  onUpload: (files: File[]) => void;
}

const FileUploadPopup: React.FC<FileUploadPopupProps> = ({ onClose, onUpload }) => {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
    maxSize: 5 * 1024 * 1024,
  });

  const handleUpload = () => {
    onUpload(files);
    onClose();
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-content">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop files here, or click to select files</p>
        </div>
        <div className="file-list">
          {files.map((file) => (
            <div key={file.name}>
              {file.name} - {Math.round(file.size / 1024)} KB
            </div>
          ))}
        </div>
        <button onClick={handleUpload}>Upload Files</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FileUploadPopup;
