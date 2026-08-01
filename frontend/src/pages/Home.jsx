// import UploadForm from "../components/UploadForm";

// function Home() {
//   return (
//     <div>
//       <UploadForm />
//     </div>
//   );
// }

// export default Home;
import { useState } from "react";

import UploadForm from "../components/UploadForm";
import FileHistory from "../components/FileHistory";

function Home() {
  const [refresh, setRefresh] =
    useState(false);

  const refreshFiles = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <UploadForm
        onUploadSuccess={
          refreshFiles
        }
      />

      <FileHistory key={refresh} />
    </>
  );
}

export default Home;