import './buttonLogin.css'

type args = {
  text: string,
  onLogin: () => void
}

export const ButtonLogin = ({ text, onLogin }: args) => {
  return (
    <button onClick={onLogin} className="button-login">{text}</button>
  )
}
