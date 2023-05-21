import React, {useState} from 'react';
import { FiFile } from 'react-icons/fi';
import { QUERY_FILES } from '../utils/queries'
import { useQuery} from "@apollo/client";
import Auth from '../utils/auth'

const FilesPage = ({ files}) => {
    //console.log(files)
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    let profile = Auth.getProfile();
    let userId = profile.data._id
    console.log(userId)
    
    
    //console.log(Auth.getProfile())
    
    
    const { loading, error, data } = useQuery(QUERY_FILES, {
      variables: {
        _id: userId,
      },
    });
    
    if (loading) {
      // Handle loading state
      console.log("loooaddddingg!!!")
    }
    
    if (error) {
      // Handle error state
      console.log("NNOOOOOOO!!")
    }


  console.log({data})



  
    console.log(JSON.stringify(data));

    if (!token) {
      return false;
    }
    
    
    
    
    
    
    // const { loading, error, data } = useQuery(QUERY_FILES);
    //console.log(token)
    // console.log(JSON.stringify(data))

    if (!token) {
      return false;
    }
    

    
  const fileNames = [
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
        {fileNames.length > 0 ? (
          <ul
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {fileNames.map((file, index) => (
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

