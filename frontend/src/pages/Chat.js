import React, { useEffect, useState } from 'react';

function Chat() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL you want to fetch data from
    // const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const apiUrl='http://localhost:5000/api/chats'

    // Use the fetch function to make a GET request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); // Set the data in the state
        setLoading(false);     // Update loading state
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Chats</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((chats) => (
            <li key={chats._id}>{chats.chatName}</li>
          ))}
        </ul>
      )}

      
    </div>
  );
}

export default Chat;



















// import React from 'react'
// import { useEffect } from 'react';

// const Chat = () => {
//     useEffect(() => {

//         fetch('https://ubahthebuilder.tech/posts/1')
// .then(data => {
// return data.json();
// })
// .then(post => {
// console.log(post.title);
// });
        

//       });
//   return (
//     <div>
//         <div>
//             chat
//         </div>
       
//     </div>
//   )
// }

// export default Chat