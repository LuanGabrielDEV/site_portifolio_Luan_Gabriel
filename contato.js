function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const telefone = "5581986614680";
    
    const texto = `Olá, meu nome é ${nome.value} e gostaria de entrar em contato. ${mensagem.value}`;
    const textoCodificado = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${textoCodificado}`;

    window.open(url, '_blank');
}