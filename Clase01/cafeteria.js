/*
*En una cafetería moderna, es común que los clientes realicen pedidos que requieren preparación mientras se reciben nuevos pedidos. 
*Una interfaz debe mostrar los pedidos en progreso, permitir que los baristas trabajen en ellos de manera asincrónica 
* y actualizar el estado de los pedidos en tiempo real. 
*El desafío consiste en simular este sistema mediante JavaScript, utilizando el Event Loop y diferentes mecanismos 
*de asincronía como `setTimeout`, Promises y `async/await`.
*/

const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1;

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, newStatus) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${newStatus}`;
    }
}

function simulatePreparationTime() {
    return new Promise(resolve => {
        const time = Math.floor(Math.random() * 5000) + 2000; // simulacion del tiempo que está entre 2 y 7 segundos
        setTimeout(resolve, time);
    });
}

async function processOrder(order) {
    await simulatePreparationTime();
    updateOrderStatus(order, 'Completado');
}