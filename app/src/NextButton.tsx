import { useNavigate } from "react-router-dom";

export default function NextButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(1)}>Click for giggles 🤡🤡🤡</button>;
}
