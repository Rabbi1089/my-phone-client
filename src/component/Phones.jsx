import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h1>Here are {phones.length} phone</h1>
      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/cellphone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
