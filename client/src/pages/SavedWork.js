import React from 'react';
import { FiFile } from 'react-icons/fi';

const FilesPage = () => {
  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
    'file6.txt',
    'file7.txt',
    'file8.txt',
    'file9.txt',
    'file10.txt',
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f6f8fa',
      }}
    >
      <div
        style={{
            width: '75%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '6px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          bottom: '15%'
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: '20px',
            fontSize: '24px',
            color: '#24292e',
          }}
        >
          My Files
        </h1>
        {files.length > 0 ? (
          <ul
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {files.map((file, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <FiFile
                  style={{
                    marginRight: '10px',
                    fontSize: '20px',
                    color: '#0366d6',
                  }}
                />
                <span
                  style={{
                    fontSize: '16px',
                    color: '#24292e',
                  }}
                >
                  {file}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontSize: '16px',
              color: '#999',
            }}
          >
            No files found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilesPage;
