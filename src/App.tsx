import { useEffect, useState } from "react";
import styled from "styled-components";



interface AdviceTypes{
  slip: {
    id: number,
    advice: string;
  }
}

function App() {
    const [advice, setAdvice] = useState<AdviceTypes>();
    const [count,setCount] = useState(0)


    useEffect(() => {
      const fetchData = async () => {


        try{
          const res = await fetch('https://api.adviceslip.com/advice');
          const data = await res.json();

          if(!data) throw new Error('Something went wrong')
            setAdvice(data)
        }
          catch(error){
            console.error(error)
          }
      }
    
      fetchData();
    }, [count]);

  return (
    <Container>
        <h1>ADVICE #{advice?.slip.id}</h1>
        <p>{advice?.slip.advice}</p>
        <img src="/images/pattern-divider-desktop.svg" alt="some-pattern" />
        <Button onClick={() => setCount(prev => prev +1)}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </Button>

    </Container>
  )
}

export default App;


const Container = styled.div`
  width: 540px;
  position: relative;
  background-color: hsl(217, 19%,24%);
  border-radius: 8px;
  text-align: center;
  padding: 48px;

  & h1{
    font-size: 13px;
    color: hsl(150,100%,66%);
    letter-spacing: 4.09px;
  }
  
  p{
    color: hsl(193, 38%, 86%);
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.3px;
    margin: 24px 0 40px;
  }
`;

const Button = styled.button`
  background-color: hsl(150, 100%, 66%);
  border: none;
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,50%);
  cursor: pointer;

  & svg{
    fill: hsl(150,100%, 60%);
  }
`
