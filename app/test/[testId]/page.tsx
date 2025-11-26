// "use client";
// import {useParams} from 'next/navigation'
// const Testt = () => {
//     const params = useParams();
//     console.log(params)
//     return (

//         <div>Test ID: </div>
//     )
// }

// export default Testt

export default function Page({ params }: { params: { id: string } }) {
    // console.log("id",params.id)
  const { id } = params;

  return (
    <div>
      Product ID: {id}
    </div>
  );
}
