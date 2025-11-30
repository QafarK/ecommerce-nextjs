// // app/ui/invoices/table.tsx
// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

// export default async function InvoicesTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
//   const invoices = await fetchFilteredInvoices(query, currentPage);

//   return (
//     <div className="mt-6 flow-root">
//       <div className="overflow-x-auto">
//         <div className="inline-block min-w-full align-middle">
//           <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//             <table className="hidden min-w-full text-gray-900 md:table">
//               <thead className="rounded-lg text-left text-sm font-normal">
//                 <tr>
//                   <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                     Customer
//                   </th>
//                   <th scope="col" className="px-3 py-5 font-medium">
//                     Email
//                   </th>
//                   <th scope="col" className="px-3 py-5 font-medium">
//                     Amount
//                   </th>
//                   <th scope="col" className="px-3 py-5 font-medium">
//                     Date
//                   </th>
//                   <th scope="col" className="px-3 py-5 font-medium">
//                     Status
//                   </th>
//                   <th scope="col" className="relative pl-3 pr-6 pt-5">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {invoices?.map((invoice) => (
//                   <tr
//                     key={invoice.id}
//                     className="w-full border-b py-3 text-sm last-of-type:border-none"
//                   >
//                     <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                       <div className="flex items-center gap-3">
//                         <Image
//                           src={invoice.image_url}
//                           className="rounded-full"
//                           alt={`${invoice.name}'s profile picture`}
//                           width={28}
//                           height={28}
//                         />
//                         <p>{invoice.name}</p>
//                       </div>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4">
//                       {invoice.email}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4">
//                       {formatCurrency(invoice.amount)}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4">
//                       {formatDateToLocal(invoice.date)}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4">
//                       <span
//                         className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
//                           invoice.status === 'pending'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-green-100 text-green-800'
//                         }`}
//                       >
//                         {invoice.status}
//                       </span>
//                     </td>
//                     <td className="whitespace-nowrap py-4 pl-3 pr-6">
//                       <div className="flex justify-end gap-3">
//                         <UpdateInvoice id={invoice.id} />
//                         <DeleteInvoice id={invoice.id} />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const table = () => {
  return (
    <div>table</div>
  )
}

export default table