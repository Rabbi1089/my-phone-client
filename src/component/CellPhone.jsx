import { useLoaderData } from "react-router-dom";


const CellPhone = () => {
  const phoneX = useLoaderData();
  console.log(phoneX);
  console.log(phoneX.name);
  return (
    <div>
      <h1>Phone Name : {phoneX.name}</h1>
      <img src={phoneX.image} alt="" />
    </div>
  );
};

export default CellPhone;