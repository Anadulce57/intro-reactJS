export function ComponeteBotao(){
    function ClickBotao(){
        alert("Botão foi clicado!");
    }
    return(
        <div>
            <button onClick={ClickBotao}>Clique em mim</button>
        </div>
    );
}