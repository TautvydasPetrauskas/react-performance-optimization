import { useState } from "react";

interface CustomerCardProps {
  name: string;
  age: number;
}

interface CustomerCard2Props {
  customer: CustomerCardProps;
}

const CustomerCard = ({ name, age }: CustomerCardProps) => {
  console.log("CustomerCard re-rendered");
  return (
    <div>
      <h3>{name}</h3>
      <p>{age} years old</p>
    </div>
  );
};

const CustomerCardWithCustomerObject = ({ customer }: CustomerCard2Props) => {
  console.log("CustomerCard with customer object re-rendered");
  return (
    <div>
      <h3>{customer.name}</h3>
      <p>{customer.age} years old</p>
    </div>
  );
};

const CustomerProfile = () => {
  return (
    <div>
      <h2>Customer Profile With inline props</h2>
      <CustomerCard name="Alice" age={25} />
    </div>
  );
};

const CustomerProfileWithSpread = () => {
  const customer = { name: "Alice", age: 25 };

  return (
    <div>
      <h2>Customer Profile With spread</h2>
      <CustomerCard {...customer} />
    </div>
  );
};

const CustomerProfileWithObject = () => {
  const customer = { name: "Alice", age: 25 };

  return (
    <div>
      <h2>Customer Profile With Customer object</h2>
      <CustomerCardWithCustomerObject customer={customer} />
    </div>
  );
};

export const Customer = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>

      <CustomerProfile />
      <CustomerProfileWithSpread />
      <CustomerProfileWithObject />
    </div>
  );
};
