import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Fetching = (props) => {
  const [peoples, setpeoples] = useState([]);
  const GetAllData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setpeoples(data));
  };
  useEffect(() => {
    GetAllData();
  }, []);

  // FUNC TO DELETE PRODUCTS
  const deletedID = (PID, name) => {
    Swal.fire({
      title: ` You will delet ( ${name} )`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Your ID ${PID} has been deleted.`, "success");
        fetch(`${url}/${PID}`, { method: "delete" })
          .then((res) => res.json())
          .then((data) => GetAllData());
      }
    });
  };
};

export default Fetching;
