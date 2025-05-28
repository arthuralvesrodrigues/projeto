// Inicializa a variável 'balance' com valor zero
var balance = 0;

// Função que atualiza o texto na tela com o saldo atual formatado
    function updateBalance() {
      document.getElementById("balance").textContent = "R$" + balance.toFixed(2);
    }

// Função que realiza um depósito no saldo
    function deposit(amount) {
      balance += amount;  // Soma o valor informado ao saldo
      updateBalance(); // Atualiza o saldo na tela
      alert(`Depósito de R$${amount.toFixed(2)} realizado com sucesso.`); // Mostra mensagem de confirmação
    }

// Função que realiza um saque do saldo
    function withdraw(amount) {
      if (amount > balance) {  // Verifica se o valor do saque é maior que o saldo
        // Verifica se há saldo suficiente
        alert("Saldo insuficiente para realizar o saque."); // Exibe alerta de erro
        return; // Encerra a função
      }
      balance -= amount; // Subtrai o valor do saldo
      updateBalance(); // Atualiza o valor mostrado na tela
      alert(`Saque de R$${amount.toFixed(2)} realizado com sucesso.`); // Exibe confirmação
    }

// Função que exibe o saldo atual ao usuário
    function checkBalance() {
      alert("Seu saldo atual é: R$" + balance.toFixed(2)); // Mostra saldo em um alerta
    }

// Função que processa a transação com base na opção selecionada
    function processTransaction() {
      var type = document.getElementById("transactionType").value; // Obtém o tipo de transação do select
      var amount = 0; // Inicializa o valor da transação

// Estrutura de decisão para executar a operação escolhida
      switch (type) {
        case "deposit":
          amount = parseFloat(prompt("Insira o valor do depósito:")); // Pede valor ao usuário
          if (!isNaN(amount)) {
            // Verifica se o valor é numérico
            deposit(amount); // Chama função de depósito
          } else {
            alert("Por favor, insira um valor numérico válido para o depósito.");  // Mensagem de erro
          }
          break;
        case "withdraw":
          amount = parseFloat(prompt("Insira o valor do saque:"));  // Pede valor ao usuário
          if (!isNaN(amount)) { // Verifica se o valor informado é um número
            withdraw(amount); // Chama função de saque
          } else {
            alert("Por favor, insira um valor numérico válido para o saque."); // Mostra alerta se o valor for inválido
          }
          break;
        case "checkBalance":
          checkBalance();  // Chama a função que mostra o saldo atual
          break;
        default:
          alert("Serviço não reconhecido."); // Caso o tipo não esteja entre as opções válidas
      }
    }

    // Inicializa o saldo na tela
    updateBalance();
