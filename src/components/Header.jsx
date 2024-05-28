import reactimg from "../assets/react-core-concepts.png";

function getRandom() {
  return Math.floor(Math.random() * 3);
}

const array = ["Fundamental", "Crucial", "Core"];

export default function Header() {
  const description = array[getRandom()];

  return (
    <header>
      <img src={reactimg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
