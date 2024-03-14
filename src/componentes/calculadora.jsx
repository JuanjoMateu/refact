function Calculadora(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);
    
    const sumar = () => {
        setResultado(num1 + num2)
    }
    const restar = () => {
       setResultado(num1 - num2)
    }
    const multiplicar = () => {
        setResultado(num1 * num2)
    }
    const dividir = () => {
        setResultado(num1 / num2)
    }
    return(
        <div>
            <h2>Calculadora</h2>
            <input type="number" value="number1" onChange={(e) => setNum1(Number(e.target.value))}/>
            <input type="number" value="number2" onChange={(e) => setNum2(Number(e.target.value))}/>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
}

export default Calculadora