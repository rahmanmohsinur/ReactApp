// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ContactDemo(props) {
//   const [data, setData] = useState({
//     email: "",
//     phone: "",
//     message: "",
//     sent: false,
//   });
//   const [thankYouMessage, setThankYouMessage] = useState("");

//   const goBack = () => {
//     props.setIsOnHomePage(true);
//   };

//   const onChange = (e) => {
//     const value = e.target.value;
//     const name = e.target.getAttribute("name");
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const resetForm = () => {
//     setData({
//       email: "",
//       phone: "",
//       message: "",
//       sent: false,
//     });
//   };

//   // here I think is the problem in this function?
//   const onSubmit = (e) => {
//     axios
//       .post("/api/sendmail", data)
//       .then((res) => {
//         if (res.data.result !== "success") {
//           setData({
//             ...data,
//             sent: false,
//           });
//           resetForm();
//         } else {
//           setData({
//             ...data,
//             sent: true,
//           });
//           resetForm();
//         }
//       })
//       .catch((err) => {
//         setData({
//           ...data,
//         });
//       });
//     setThankYouMessage("thank you");
//   };

//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     return () => {
//       source.cancel();
//     };
//   }, []);

//   return (
//     <div className="contact-me-form">
//       <button className="go-back" onClick={goBack}>
//         go back
//       </button>
//       <h1 className="contact-me-title">Contact me</h1>
//       <form>
//         <p className="input-title">email</p>
//         <input
//           className="input-field"
//           defaultValue={data.email}
//           name="email"
//           onChange={onChange}
//         ></input>
//         <p className="input-title">phone number</p>
//         <input
//           className="input-field"
//           defaultValue={data.phone}
//           name="phone"
//           onChange={onChange}
//         ></input>
//         <p className="input-title">message</p>
//         <textarea
//           className="text-field"
//           defaultValue={data.message}
//           name="message"
//           onChange={onChange}
//           rows="3"
//         ></textarea>
//       </form>
//       <button
//         onClick={() => {
//           onSubmit();
//         }}
//         className="submit-contact-form-button">
//         submit
//       </button>
//       <p className="thank-you-message">{thankYouMessage}</p>
//     </div>
//   );
// }
