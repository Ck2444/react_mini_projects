const App = ({ initialButtonText, initialClassesList }) => {

    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [classesList, setClassesList] = React.useState('')

    const onButtonClick = () => {
        setButtonText('Hello from React')
        setClassesList('green-btn')
    }
    return (

        <div className="app">
            <button className={classesList} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div >


    )
}
const container = document.getElementById('app') // found HTML with id app и присвоили его переменной контейнер
const root = ReactDOM.createRoot(container) // Монтируем элемент реакт в html страницу
root.render(<App initialButtonText="Click me" initialClassesList="" />) //вызываем метод рендер объекта root и передаем ему определенный элемент реакт