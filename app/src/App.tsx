import './App.css';
import { useEffect, useState } from 'react';
import { HelloServer } from './servers/hello-server';
import { User } from './bases/user';

function App() {
  const [ user, setUser ] = useState<User>();

  useEffect(() => {
    new HelloServer().getUser().then(res => {
      const { title, last } = res;
      setUser({ title, last })
    })
  }, [])

  return (
    <div className="App">
      { user ? (
        <h1> Hello, {user.title} {user.last}!! </h1>
      ) : (
        <span>user not found...</span>
      )}
    </div>
  );
}

export default App;
