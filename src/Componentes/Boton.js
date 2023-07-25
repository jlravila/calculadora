import "./Boton.css"

export default function Boton ({clickHandle, name, red, wide, blue, gray, orange}) {

  const handleClick = () => clickHandle(name)

  const className = [
    "component-button",
    red ? "red" : "",
    wide ? "wide" : "",
    blue ? "blue" : "",
    gray ? "gray" : "",
    orange ? "orange" : "",
  ]

      return (
        <div className={className.join(" ").trim()}>
          <button className="btn" onClick={handleClick}>{name}</button>
        </div>
      );
  }