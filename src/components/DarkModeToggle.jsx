
// the toggleTheme is passes as a prop from the parent component

export default function DarkModeToggle({toggleTheme, dark }) {

 
  
  return (
    <div>
      <button onClick={toggleTheme} className={'themeButton'}>
        {dark ? "Light Theme" : "Dark Theme"}
      </button>
    </div>
  )
}
