import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phoneDetails = useLoaderData();
  console.log(phoneDetails);
  //console.log(phoneDetails[2]);
  //console.log(phoneDetails.name);
  return (
    <div>
      <h1>i am from phone details</h1>
    </div>
  );
};

export default Phone;
