import React, {useState} from 'react';
import { FiFile } from 'react-icons/fi';
import { QUERY_FILES } from '../utils/queries'
import { useQuery} from "@apollo/client";
import Auth from '../utils/auth'

const FilesPage = ({ files}) => {
    //console.log(files)
//   const [fetchFiles, setfetchFiles] = useState(null)
 const token = Auth.loggedIn() ? Auth.getToken() : null;
     let profile = Auth.getProfile();
     let userId = profile.data._id
   //console.log(userId)
    
    
    //console.log(Auth.getProfile())
    
    
    const { loading, error, data } = useQuery(QUERY_FILES, {
      variables: {
        _id: userId,
      },
    });

    let savedWork = ""
    if(loading === false){
      //console.log(data, loading)
      let savedWork = data.savedFiles.savedWork;
      console.log([savedWork])
  }
if (error) {
      // Handle error state
      console.error(error)
    }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       // height: '100vh',
        backgroundColor: '#f6f8fa',
      }}
    >
      {/* {fetchFiles} */}
      <div
      id={'files'}
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
        {!loading? (
          <ul
            style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {/* {JSON.stringify(data.savedFiles.savedWork[1])} */}

            {data.savedFiles.savedWork.map((file, index) => {
  let question = file.question;
  let solution = file.solution;
  
  return (
    <li
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        borderRadius: '6px',
      }}
    >
      <div style={{ flex: 1 }}>
     
        <p style={{ marginBottom: '10px' }}>{question}</p>
        
    
       <pre> <p>{solution}</p></pre>
      </div>
      
      <button
        style={{
          marginLeft: '20px',
          padding: '8px 15px',
          border: 'none',
          backgroundColor: '#4caf50',
          color: '#ffffff',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Download
      </button>
    </li>
  );
})}

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
           No files found
          </p>
        )}
      </div>
    </div>
  );
};

export default FilesPage;

