

export default function DarkModeToggle({toggleTheme, dark }) {

  // const [dark, setDark] = useState(false);
  // const toggle = () => {
  //   setDark((prevTheme) => !prevTheme);
  
  return (
    <div>
      <button onClick={toggleTheme} className={'themeButton'}>
        {dark ? "Light Theme" : "Dark Theme"}
      </button>
    </div>
  )
}
