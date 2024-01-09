import { Metadata } from "next";

type Props = {
  params: { id: string }
}

export default function page({ params }: Props) {
  return <div>
    <h1>Details about job {params.id} </h1>
  </div>;
}
