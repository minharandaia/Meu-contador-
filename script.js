async function registrarClique() {
  await fetch('/click', { method: 'POST' });
  carregarTotal();
}

async function carregarTotal() {
  const res = await fetch('/stats');
  const data = await res.json();
  document.getElementById('total').innerText =
    'Total de visitas: ' + data.visitas + ' | Total de cliques: ' + data.cliques;
}

carregarTotal();
