import React from 'react';
import Header from "./components/Header"
import SearchBox from "./components/SearchBox"
import UserDiv from "./components/UserDiv"
import FieldsDiv from './components/FieldsDiv';

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBox />
        <FieldsDiv />

        <UserDiv name="Danny DeVito" image="https://collab-hub.herokuapp.com/screenshot"
            phone="215-444-6245" email="paddyspub@bar.com" dob="4-10-1942"/>

        
      </main>
    </>
  );
}

export default App;