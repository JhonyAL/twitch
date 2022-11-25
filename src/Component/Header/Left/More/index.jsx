export default function More() {

    const more = [
        {
            title: "Geral",
            list: [
                "Anunciantes",
                "Baixar Aplicativos",
                "Blog",
                "Desenvolvedores",
                "Empregos",
                "IGBD",
                "Imprensa",
                "Loot Cave - Loja de produtos",
                "Parceiros",
                "Sobre",
                "Turbo",
                "Twitch Gift Card"
            ]
        },
        {
            title: "Ajuda e Jurídico",
            list: [
                "Ajuda",                
                "Declaração de acessibilidade",
                "Diretrizes da comunidade",
                "Opções de anúncio",
                "Política de cookies",
                "Política de privacidade",
                "Central de segurança",
                "Segurança",
                "Termos"
            ]
        }
    ]

    return (
        <div className="headerMore">
            {more.map((e) => {
                return(
                    <div key={e.title} className="moreContent">
                        <h3 className="title">{e.title}</h3>
                        <div className="content">
                            {e.list.map((e) => <a href="#" key={e}>{e}</a>)}
                        </div>
                        <hr id={e.title} />
                    </div>
                )
            })}
        </div>
    )
}