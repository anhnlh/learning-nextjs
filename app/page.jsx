import LikeButton from "./like-button";

// destructuring props (aka custom arguments)
function Header({ title }) {
  return <h1>{`${title} - Next`}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "John von Neumann"];
  // React hook to manage state
  // Learn more: https://react.dev/learn/adding-interactivity and https://react.dev/learn/managing-state
  // 'likes' is the number of likes, 'setLikes' is the update function, and the number of likes start at 0.

  return (
    <div>
      <Header title="Code. Revise. Deploy." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Header title="React 😎" />
      <LikeButton />
    </div>
  );
}
