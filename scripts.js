

// Função para calcular o planejamento financeiro
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let renda = parseFloat(document.getElementById("renda").value);
    let despesas = parseFloat(document.getElementById("despesas").value);
    let objetivo = parseFloat(document.getElementById("objetivo").value);
    let meses = parseInt(document.getElementById("meses").value);
    
    let economiaMensal = renda - despesas;

    if (economiaMensal <= 0) {
        document.getElementById("resultado").innerHTML = "Você não está economizando nada com as despesas atuais!";
    } else {
        let mesesNecessarios = objetivo / economiaMensal;
        document.getElementById("resultado").innerHTML = `Com sua economia de R$${economiaMensal.toFixed(2)} por mês, você alcançará seu objetivo em aproximadamente ${mesesNecessarios.toFixed(1)} meses!`;
    }
});

// Dados fictícios das melhores ações (simulação)
let acoes = ['Apple', 'Tesla', 'Google', 'Amazon', 'Microsoft'];
let precos = [150.25, 755.10, 2800.50, 3400.60, 299.20];

// Função para criar o gráfico de barras com os dados fictícios das ações
function criarGraficoAcoes() {
    let ctx = document.getElementById('graficoAcoes').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: acoes,  // Nomes das ações
            datasets: [{
                label: 'Preço das Ações (em USD)',
                data: precos,  // Preços fictícios das ações
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chama a função para criar o gráfico quando a página é carregada
document.addEventListener("DOMContentLoaded", criarGraficoAcoes);

