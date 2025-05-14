import { useState } from "react"

export default function DarkModeToggle() {

    const [dark, setDark] = useState(false);
    const toggle = () => {
        setDark((prevTheme) => !preTheme);

        
    }
  return (
    <div classname={dark?  "dark-theme" : "light-theme"}>
<button onClick={toggle}>
{dark? "toggle to light-theme" : "toggle to dark-theme"}
</button>



    </div>
  )
}
