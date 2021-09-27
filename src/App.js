import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Model";
import Nav from "./components/Nav";
import UploadFrom from "./components/UploadFrom";

function App() {

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <Nav />
            <UploadFrom />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
        </>
    );
}

export default App;
