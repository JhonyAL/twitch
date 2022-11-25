import Header from './Component/Header'

export default function App() {

  const lista = [
    {id: 0, texto: "Elemento1"},
    {id: 1, texto: "Elemento2"},
    {id: 2, texto: "Elemento3"}
  ]

  return (
    <div className='App'>
      <Header />
      {lista.map((e) => {
        return (
          <p key={e.id}>{e.texto}</p>
        )
      })}
    </div>
  )
}