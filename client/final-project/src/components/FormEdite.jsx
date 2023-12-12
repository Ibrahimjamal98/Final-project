// import Modal from "react-modal";
// import closeImage from "../images/close icon.jpeg";
// import { TbCurrencyShekel } from "react-icons/tb";
// import { useState } from "react";
// import "../style/Form.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const customStyles = {
//   content: {
//     width: "60%",
//     height: "60%",
//     margin: "auto",
//     top: "50%",
//     transform: "translateY(-50%)",
//   },
// };

// const FormEdite = ({ cakes, cakeId, onClose }) => {
//   const baseURL = " https://6516ff2909e3260018ca8e50.mockapi.io/cake";
//   const [isModelOpen, setIsModelOpen] = useState(true);
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [cakeName, setcakeName] = useState("");
//   const [cakeImg, setcakeImg] = useState("");
//   const [cakeDescription, setcakeDescription] = useState("");
//   const [cakePrice, setcakePrice] = useState("");
//   const updatecake = () => {
//     const updatedcake = {
//       name: cakeName,
//       image: cakeImg,
//       description: cakeDescription,
//       price: cakePrice,
//     };
//     axios
//       .put(`${baseURL}/${cakeId}`, updatedcake)
//       .then((response) => {
//         console.log("cake updated successfully:", response.data);
//         setcakeName("");
//         setcakeImg("");
//         setcakePrice("");
//         setcakeDescription("");
//       })
//       .catch((error) => {
//         console.log("Error updating cake:", error);
//       });
//   };

//   return (
//     <div className="overlay">
//       <Modal
//         style={customStyles}
//         isOpen={isModelOpen}
//         onRequestClose={onClose}
//         appElement={document.getElementById("app")}
//       >
//         {console.log({ cakeId })}
//         <h1>Updat Form </h1>
//         <Link to="/products">
//           <img
//             className="imgclose"
//             src={closeImage}
//             onClick={onClose}
//             alt="Close"
//           />
//         </Link>

//         <div>
//           <label className="label">Cake Name :</label>
//           <input
//             className="form-input"
//             value={cakeName}
//             placeholder="Cake name"
//             onChange={(e) => setcakeName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Cake Image URL :</label>
//           <input
//             className="form-input"
//             placeholder="Cake image"
//             value={cakeImg}
//             onChange={(e) => setcakeImg(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>
//             Price <TbCurrencyShekel /> :
//           </label>
//           <input
//             className="form-input"
//             placeholder="Cake Price"
//             value={cakePrice}
//             onChange={(e) => setcakePrice(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Description :</label>
//           <input
//             className="form-input"
//             value={cakeDescription}
//             placeholder="Description of cake"
//             onChange={(e) => setcakeDescription(e.target.value)}
//           />
//         </div>

//         <button type="submit" onClick={updatecake}>
//           Update cake item
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default FormEdite;
