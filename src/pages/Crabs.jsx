import { Button } from "../components/Button.jsx/Button"
import { useState } from "react"

export const Crabs = () => {
    const [crabs, setCrabs] = useState([])
    const [totalMp, setTotalMp] = useState(0)
    const [totalEfectivo, setTotalEfectivo] = useState(0)
    const formReadMp = (e) => {
        e.preventDefault()
        const inputPurchaser = document.getElementById('purchaser')
        const inputAmount = document.getElementById('amount')
        const inputIsPaying = document.getElementById('isPaying')
        const valueIsPaying = inputIsPaying.value
        const valuePurchaser = inputPurchaser.value
        const valueAmount = inputAmount.value
        if (valueAmount && valuePurchaser) {
            setCrabs((prevCrabs) => [
                ...prevCrabs,
                { valuePurchaser, valueAmount, method: 'Mercado Pago', isPaying: valueIsPaying }
            ])
            setTotalMp((prevTotal) => prevTotal + Number(valueAmount))
        } else {
            alert('Ingrese un monto y un comprador')
        }
        inputPurchaser.value = ''
        inputAmount.value = ''
    }
    const formRead = (e) => {
        e.preventDefault()
        const inputPurchaser = document.getElementById('purchaser')
        const inputAmount = document.getElementById('amount')
        const inputIsPaying = document.getElementById('isPaying')
        const valueIsPaying = inputIsPaying.value
        const valuePurchaser = inputPurchaser.value
        const valueAmount = inputAmount.value
        if (valueAmount && valuePurchaser) {
            setCrabs((prevCrabs) => [
                ...prevCrabs,
                { valuePurchaser, valueAmount, method: 'Efectivo', isPaying: valueIsPaying }
            ])
            setTotalEfectivo((prevTotal) => prevTotal + Number(valueAmount))
        } else {
            alert('Ingrese un monto y un comprador')
        }
        inputPurchaser.value = ''
        inputAmount.value = ''
    }

    
    return (
        <div className="p-4">
            <h1 className="my-2 text-xl md:text-2xl">Crabs</h1>
            <div className="flex flex-col gap-4 md:flex-row">
                <form className="flex flex-col gap-4 md:flex-row md:items-center" action="">
                    <input className="border border-cyan-900 p-2 w-full md:w-auto" type="text" name="purchaser" id="purchaser" placeholder="Ingrese un comprador" />
                    <input className="border border-cyan-900 p-2 w-full md:w-auto" type="number" name="amount" id="amount" placeholder="Ingrese un monto" />
                    <input className="border border-cyan-900 p-2 w-full md:w-auto" type="text" name="isPaying" id="isPaying" placeholder="Ingrese el estado de pago (true/false)" />
                </form>
                <div className="flex gap-4">
                    <Button onClick={formReadMp}> Mercado Pago </Button>
                    <Button onClick={formRead}> Efectivo </Button>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Comprador</th>
                            <th className="border px-4 py-2">Monto</th>
                            <th className="border px-4 py-2">Método</th>
                            <th className="border px-4 py-2">Pagado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {crabs?.map((venta, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{venta.valuePurchaser}</td>
                            <td className="border px-4 py-2">${venta.valueAmount}</td>
                            <td className="border px-4 py-2">{venta.method}</td>
                            <td className="border px-4 py-2">{venta.isPaying}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="text-lg">
                    <h2>Total: ${crabs?.reduce((total, ventas) => total + Number(ventas.valueAmount), 0)}</h2>
                    <h3>Total Mercado Pago: ${totalMp}</h3>
                    <h3>Total Efectivo: ${totalEfectivo}</h3>
                </div>
            </div>
        </div>
    )}

//         <div>
//             <h1 className="my-2">Crabs</h1>
//             <div className="flex flex-col gap-4">
//                 <form className="flex gap-4" action="">
//                     <input className="border border-cyan-900 p-2" type="text" name="purchaser" id="purchaser" placeholder="Ingrese un comprador" />
//                     <input className="border border-cyan-900 p-2" type="number" name="amount" id="amount" placeholder="Ingrese un monto" />
//                     <input className="border border-cyan-900 p-2" type="text" name="isPaying" id="isPaying" placeholder="Ingrese el estado de pago (true/false)" />
//                 </form>
//                 <Button onClick={formReadMp}> Mercado Pago </Button>
//                 <Button onClick={formRead}> Efectivo </Button>
//             </div>
//             <div className="flex flex-col gap-4">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Comprador</th>
//                             <th>Monto</th>
//                             <th>Método</th>
//                             <th>Pagado</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {crabs?.map((venta, index) => (
//                         <tr key={index}>
//                             <td>{venta.valuePurchaser}</td>
//                             <td>${venta.valueAmount}</td>
//                             <td>{venta.method}</td>
//                             <td>{venta.isPaying}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//                     <h2>Total: ${crabs?.reduce((total,ventas) => total + Number(ventas.valueAmount),0)}</h2>
//                     <h3>Total Mercado Pago: ${totalMp}</h3>
//                     <h3>Total Efectivo: ${totalEfectivo}</h3>
//             </div>
//         </div>
//     )
// }